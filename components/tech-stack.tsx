import React, { Component } from 'react'
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";


export default class TechStack extends Component {
    render() {
        const stacks = [
            {
                id: 1,
                name: "Python",
                designation: "FastAPI, Selenium, pytest",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png",
            },
            {
                id: 2,
                name: "React",
                designation: "Router, Tailwind CSS",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
            },
            {
                id: 3,
                name: "Node",
                designation: "API REST, Express, ORM",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png",
            },
            {
                id: 4,
                name: "Typescript",
                designation: "Javascript",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png",
            },
            {
                id: 5,
                name: "Next JS",
                designation: "Routing, PrismaORM, Vercel",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png",
            },
            {
                id: 6,
                name: "Java",
                designation: "DSA, OOP",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png",
            },
            {
                id: 7,
                name: "Spring Boot",
                designation: "MVC, API REST, Maven, Thymeleaf",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png",
            },
            {
                id: 8,
                name: "Laravel",
                designation: "PHP, Blade",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png",
            },
            {
                id: 9,
                name: "Postgres",
                designation: "SQL, Normalização",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png",
            },
            {
                id: 10,
                name: "Docker",
                designation: "Containêrs, compose",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png",
            },
            {
                id: 11,
                name: "Ubuntu",
                designation: "WSL, Terminal",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ubuntu.png",
            },
            {
                id: 12,
                name: "Godot",
                designation: "Game Design, GDScript, C#",
                image:
                    "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/godot.png",
            },
        ];

        return (
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Stack Tecnológico</h2>
                <div className="flex flex-row items-center justify-start mb-10 w-full">
                    <AnimatedTooltip items={stacks} />
                </div>
            </div>
        )
    }
}
