"use client";

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import AvatarComponent from "@/components/avatar-component";
import InfoComponent from "@/components/info-component";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import { useRef } from 'react';

export default function Portfolio() {
  const myInfo = {
    name: "Gabriel Roberto Alves Coelho",
    title: "Desenvolvedor Full Stack",
    education: "Tecnólogo em Sistemas para Internet",
    contacts: {
      cv: {
        url: "/cv/CV-GabrielRobertoAlvesCoelho.pdf",
        label: "Baixar CV"
      },
      email: {
        url: "mailto:gabrielrobertoac@gmail.com",
        label: "Enviar e-mail"
      },
      linkedin: {
        url: "https://www.linkedin.com/in/gabriel-roberto-785472217/",
        label: "LinkedIn"
      },
      github: {
        url: "https://github.com/gabrielcoelh8",
        label: "GitHub"
      }
    }
  };
  const parallax = useRef<IParallax>(null!)

  return (
      <Parallax ref={parallax} pages={2} style={{ width: '100%', height: '100%', top: '0', left: '0' }} >

        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={1}
        >
          <img src={"/parallax/c-back.png"} style={{ width: '100%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0}
          speed={0.4}
          factor={2}
        >
          <img src={"/parallax/c-woman.png"} style={{ width: '50%', marginLeft: '30%', marginTop: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} onClick={() => parallax.current.scrollTo(1)}>
          <div className="max-w-6xl mx-auto text-foreground p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <AvatarComponent />
              <InfoComponent {...myInfo} />
            </div>
            <TechStack />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.35} factor={2}>
          <div className="max-w-4xl mx-auto">
            <Projects />
          </div>
        </ParallaxLayer>
      </Parallax>
  );
}