const projects = [
    {
        title: "Westron",
        description: "API para tradução de textos, análise de sentimentos positivos e correção automática em tempo real",
        image: "https://gist.github.com/user-attachments/assets/fb2d9cb8-969e-403e-b77e-7dd2651b396b",
        github: "https://github.com/gabrielcoelh8/westron-api",
        deploy: "https://westron-api.onrender.com/docs/",
        stacks: ["Python", "Docker", "MongoDB", "LLM"]
    },
    {
        title: "WAJD - Jogo educacional",
        description: "Jogo educacional para ensino de algoritmos e estrutura de dados",
        image: "https://user-images.githubusercontent.com/64715936/278706322-7c3f7beb-8dee-4550-ae02-e8ec1213f944.png",
        github: "https://github.com/gabrielcoelh8/wajd-game",
        deploy: "https://wajdsort.netlify.app",
        stacks: ["GDScript", "Godot"]
    },
    {
        title: "Louvre",
        description: "CRUD de itens de museu com autenticação e geração de relatório em PDF",
        image: "https://gist.github.com/user-attachments/assets/161111e9-9942-48c5-979a-878953f6c811",
        github: "https://github.com/gabrielcoelh8/louvre-laravel",
        deploy: "",
        stacks: ["Bootstrap", "Laravel", "DomPDF"]
    },
    {
        title: "Blog pessoal",
        description: "Blog de contos de minha autoria, escritos em Markdown e gerados com MDBook, com arquitetura pré-definida",
        image: "https://gist.github.com/user-attachments/assets/0892c42e-a910-4d27-a12a-62d40e736ab2",
        github: "https://github.com/gabrielcoelh8/blog",
        deploy: "https://pfk.netlify.app/main",
        stacks: ["HTML", "MDBook", "Netlify"]
    },
];
const stacks = [
    {
        name: "Python",
        designation: "FastAPI, Selenium, pytest",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png",
    },
    {
        name: "React",
        designation: "Router, Tailwind CSS",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
    },
    {
        name: "Node",
        designation: "API REST, Express, ORM",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png",
    },
    {
        name: "Typescript",
        designation: "Javascript",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png",
    },
    {
        name: "NextJS",
        designation: "Routing, PrismaORM, Vercel",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png",
    },
    {
        name: "Java",
        designation: "DSA, OOP",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png",
    },
    {
        name: "Spring Boot",
        designation: "MVC, API REST, Maven, Thymeleaf",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png",
    },
    {
        name: "Laravel",
        designation: "PHP, Blade",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png",
    },
    {
        name: "Postgres",
        designation: "SQL, Normalização",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png",
    },
    {
        name: "Docker",
        designation: "Containêrs, compose",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png",
    },
    {
        name: "Ubuntu",
        designation: "WSL, Terminal",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ubuntu.png",
    },
    {
        name: "Godot",
        designation: "Game Design, GDScript, C#",
        image:
            "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/godot.png",
    },
];

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert User
  const user = await prisma.user.upsert({
    where: { email: "mailto:gabrielrobertoac@gmail.com" }, // Unique field to check
    update: {}, // No updates if user exists
    create: {
      name: "Gabriel Roberto Alves Coelho",
      title: "Desenvolvedor Full Stack",
      education: "Tecnólogo em Sistemas para Internet",
      cv: "/cv/CV-GabrielRobertoAlvesCoelho.pdf",
      email: "mailto:gabrielrobertoac@gmail.com",
      linkedin: "https://www.linkedin.com/in/gabriel-roberto-785472217/",
      github: "https://github.com/gabrielcoelh8",
    },
  });
  console.log("User created or updated:", user);
// Insert Stacks
const stackMap = new Map();
for (const stack of stacks) {
  // Find stack by name first
  let existingStack = await prisma.stack.findFirst({
    where: { name: stack.name }
  });
  // If not exists, create it
  if (!existingStack) {
    existingStack = await prisma.stack.create({
      data: {
        name: stack.name,
        designation: stack.designation,
        image: stack.image,
        userId: user.id,
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
    .filter(stackName => stackMap.has(stackName))
    .map(stackName => ({ id: stackMap.get(stackName) }));
  // Check if project already exists by title
  let existingProject = await prisma.project.findFirst({
    where: { title: project.title }
  });
  if (existingProject) {
    console.log(`Project already exists: ${project.title}`);
  } else {
    // Create new project
    existingProject = await prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        image: project.image,
        github: project.github,
        deploy: project.deploy,
        userId: user.id,
        stacks: {
          connect: stackIds
        }
      }
    });
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