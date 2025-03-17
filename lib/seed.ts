import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

export async function loadJSON(filePath: string) {
  try {
      const fullPath = path.join(process.cwd(), filePath);
      const data = await fs.readFile(fullPath, 'utf-8');
      return JSON.parse(data);
  } catch (error) {
      console.error(`Erro ao carregar ${filePath}:`, error);
      return [];
  }
}

async function main() {
  const projects = await loadJSON('lib/data/projects.json');
  const stacks = await loadJSON('lib/data/stacks.json');
  const userData = await loadJSON('lib/data/user.json');
  // Insert User
  const user = await prisma.user.upsert({
    where: { email: "gabrielrobertoac@gmail.com" },
    update: {}, 
    create: { ...userData }
  }); 
  // Insert Stacks
  const stackMap = new Map();
  for (const stack of stacks) {
    // Find stack by name first
    let existingStack = await prisma.stack.findFirst({
      where: { 
        name: stack.name,
        userId: user.id
      }
    });   
    // If not exists, create it
    if (!existingStack) {
      existingStack = await prisma.stack.create({
        data: {
          name: stack.name,
          designation: stack.designation,
          image: stack.image,
          userId: user.id,
          projectIds: [] // Initialize with empty array
        }
      });
      console.log(`Stack created: ${stack.name}`);
    } else {
      console.log(`Stack already exists: ${stack.name}`);
    }
    // Store in our map for later use
    stackMap.set(stack.name, existingStack.id);
  }
  console.log("Stacks processed.");
  // Insert Projects
  for (const project of projects) {
    // First collect all stack IDs for this project
    const stackIds = project.stacks
      .filter((stackName: string) => stackMap.has(stackName))
      .map((stackName: string) => stackMap.get(stackName));
    // Check if project already exists by title for this user
    let existingProject = await prisma.project.findFirst({
      where: { 
        title: project.title,
        userId: user.id
      }
    });
    if (existingProject) {
      console.log(`Project already exists: ${project.title}`); 
      // Update the project's stacks
      await prisma.project.update({
        where: { id: existingProject.id },
        data: {
          stackIds: stackIds
        }
      });
      // Update each stack to include this project
      for (const stackId of stackIds) {
        await prisma.stack.update({
          where: { id: stackId },
          data: {
            projectIds: {
              push: existingProject.id
            }
          }
        });
      }
      console.log(`Updated stacks for project: ${project.title}`);
    } else {
      // Create new project
      const newProject = await prisma.project.create({
        data: {
          title: project.title,
          description: project.description,
          image: project.image,
          github: project.github,
          deploy: project.deploy,
          userId: user.id,
          stackIds: stackIds
        }
      });
      // Update each stack to include this project
      for (const stackId of stackIds) {
        await prisma.stack.update({
          where: { id: stackId },
          data: {
            projectIds: {
              push: newProject.id
            }
          }
        });
      }
      console.log(`Project created: ${project.title}`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });