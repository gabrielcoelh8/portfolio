"use client";

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import AvatarComponent from "@/components/header/avatar-component";
import InfoComponent from "@/components/header/info-component";
import TechStack from "@/components/techStack/tech-stack";
import Projects from "@/components/projects/projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
          <AvatarComponent />
          <InfoComponent />
        </div>
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}