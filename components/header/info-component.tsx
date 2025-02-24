import React, { Component } from 'react'
import { Github, Mail, Linkedin, FileUser } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default class InfoComponent extends Component {
  render() {
    const name = `Gabriel Roberto Alves Coelho`;

    return (
      <div className="flex-1">
      <TextGenerateEffect words={name} />
      <p className="text-lg text-muted-foreground mb-4">
        $ Desenvolvedor Full Stack <br />
        $ Tecnólogo em Sistemas para Internet
      </p>
      
      {/* Contacts */}
      <div className="flex gap-4 mb-4">
        <a href="/cv/CV-GabrielRobertoAlvesCoelho.pdf" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <FileUser className="w-5 h-5" />
          <span>Baixar CV</span>
        </a>
        <a href="mailto:gabrielrobertoac@gmail.com" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <Mail className="w-5 h-5" />
          <span>Enviar e-mail</span>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-roberto-785472217/" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/gabrielcoelh8" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        
      </div>
    </div>
    )
  }
}
