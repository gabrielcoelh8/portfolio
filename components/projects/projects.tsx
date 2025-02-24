import React, { Component } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Linkedin, ExternalLink, FileUser } from "lucide-react";
import Image from "next/image";

export default class projects extends Component {
    render() {
        const projects = [
            {
                title: "Westron",
                description: "API para tradução de textos, análise de sentimentos positivos e correção automática em tempo real",
                image: "https://gist.github.com/user-attachments/assets/fb2d9cb8-969e-403e-b77e-7dd2651b396b",
                github: "https://github.com/gabrielcoelh8/westron-api",
                deploy: "https://westron-api.onrender.com/docs/",
                tech: ["Python", "Docker", "MongoDB", "LLM"]
            },
            {
                title: "WAJD - Jogo educacional",
                description: "Jogo educacional para ensino de algoritmos e estrutura de dados",
                image: "https://user-images.githubusercontent.com/64715936/278706322-7c3f7beb-8dee-4550-ae02-e8ec1213f944.png",
                github: "https://github.com/gabrielcoelh8/wajd-game",
                deploy: "https://wajdsort.netlify.app",
                tech: ["GDScript", "Godot", "Deploy"]
            },
            {
                title: "Louvre",
                description: "CRUD de itens de museu com autenticação e geração de relatório em PDF",
                image: "https://gist.github.com/user-attachments/assets/161111e9-9942-48c5-979a-878953f6c811",
                github: "https://github.com/gabrielcoelh8/louvre-laravel",
                deploy: "",
                tech: ["Bootstrap", "Laravel", "DomPDF"]
            },
            {
                title: "Blog pessoal",
                description: "Blog de contos de minha autoria, escritos em Markdown e gerados com MDBook, com arquitetura pré-definida",
                image: "https://gist.github.com/user-attachments/assets/0892c42e-a910-4d27-a12a-62d40e736ab2",
                github: "https://github.com/gabrielcoelh8/blog",
                deploy: "https://pfk.netlify.app/main",
                tech: ["HTML", "MDBook", "Netlify"]
            },
        ];

        return (
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
                                        Código/Docs
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    disabled={!project.deploy}
                                    className={!project.deploy ? 'cursor-not-allowed opacity-60' : ''}
                                >
                                    <a
                                        href={project.deploy || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={!project.deploy ? 'pointer-events-none' : ''}
                                        onClick={(e) => !project.deploy && e.preventDefault()}
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Ver Demo
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }
}
