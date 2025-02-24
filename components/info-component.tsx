import React from 'react';
import { Github, Mail, Linkedin, FileUser } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { LucideIcon } from 'lucide-react';

interface ContactInfo {
  url: string;
  label: string;
}

interface Contacts {
  cv: ContactInfo;
  email: ContactInfo;
  linkedin: ContactInfo;
  github: ContactInfo;
}

interface InfoComponentProps {
  name: string; 
  title: string;
  education: string;
  contacts: Contacts;
}

interface ContactLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const InfoComponent: React.FC<InfoComponentProps> = ({
  name,
  title,
  education,
  contacts
}) => {
  const ContactLink: React.FC<ContactLinkProps> = ({ href, icon: Icon, children }) => (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 hover:text-primary"
    >
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </a>
  );

  return (
    <div className="flex-1">
      <TextGenerateEffect words={name} />
      <p className="text-lg mb-4">
        $ {title} <br />
        $ {education}
      </p>
      
      <div className="flex gap-4 mb-4">
        <ContactLink href={contacts.cv.url} icon={FileUser}>
          {contacts.cv.label}
        </ContactLink>
        <ContactLink href={contacts.email.url} icon={Mail}>
          {contacts.email.label}
        </ContactLink>
        <ContactLink href={contacts.linkedin.url} icon={Linkedin}>
          {contacts.linkedin.label}
        </ContactLink>
        <ContactLink href={contacts.github.url} icon={Github}>
          {contacts.github.label}
        </ContactLink>
      </div>
    </div>
  );
};

export default InfoComponent;