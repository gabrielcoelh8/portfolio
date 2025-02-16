"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Linkedin, Globe, ExternalLink } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";

const stacks = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição detalhada do projeto 1",
    image: "/project1.png",
    github: "https://github.com/seu-usuario/projeto1",
    deploy: "https://projeto1.com",
    tech: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Projeto 2",
    description: "Descrição detalhada do projeto 1",
    image: "/project1.png",
    github: "https://github.com/seu-usuario/projeto1",
    deploy: "https://projeto1.com",
    tech: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Projeto 3",
    description: "Descrição detalhada do projeto 1",
    image: "/project1.png",
    github: "https://github.com/seu-usuario/projeto1",
    deploy: "https://projeto1.com",
    tech: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Projeto 4",
    description: "Descrição detalhada do projeto 1",
    image: "/project1.png",
    github: "https://github.com/seu-usuario/projeto1",
    deploy: "https://projeto1.com",
    tech: ["React", "TypeScript", "Node.js"]
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
          {/* Avatar */}
          <Avatar className="w-32 h-32">
            <AvatarImage src="https://avatars.githubusercontent.com/u/64715936?v=4" />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">Gabriel R. Alves Coelho</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Desenvolvedor Full Stack
            </p>
            
            {/* Contacts */}
            <div className="flex gap-4 mb-4">
              <a href="mailto:seu@email.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
                <span>gabrielrobertoac@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-roberto-785472217/" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/gabrielcoelh8" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Stack Tecnológico</h2>
          <div className="flex flex-row items-center justify-start mb-10 w-full">
            <AnimatedTooltip items={stacks} />
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <CardHeader>
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}