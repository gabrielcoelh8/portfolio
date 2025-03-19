import React from 'react';
import { Github, Mail, Linkedin, FileUser } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactInfo {
  url: string | null | undefined;
  label: string | null | undefined;
}

interface Contacts {
  cv: ContactInfo;
  email: ContactInfo;
  linkedin: ContactInfo;
  github: ContactInfo;
}

interface InfoComponentProps {
  name: string | null | undefined;
  title: string | null | undefined;
  education: string | null | undefined;
  contacts: Contacts;
}

interface ContactButtonProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  disabled?: boolean;
}

const InfoComponent: React.FC<InfoComponentProps> = ({
  name,
  title,
  education,
  contacts
}) => {
  const ContactButton: React.FC<ContactButtonProps> = ({ href, icon: Icon, children, disabled }) => (
    <Button
      variant="default"
      className="bg-black text-white hover:bg-gray-800 dark:bg-black dark:hover:bg-gray-800"
      size="sm"
      asChild
      disabled={disabled || !href}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <Icon className="w-4 h-4" />
        <span>{children}</span>
      </a>
    </Button>
  );

  return (
    <div className="flex-1">
      <TextGenerateEffect words={name ?? ''} />
      <p className="text-lg mb-4">
        $ {title} <br />
        $ {education}
      </p>
      
      <div className="flex flex-wrap gap-3 mb-4">
        <ContactButton 
          href={contacts.cv.url ?? ''} 
          icon={FileUser}
          disabled={!contacts.cv.url}
        >
          {contacts.cv.label}
        </ContactButton>
        <ContactButton 
          href={contacts.email.url ?? ''} 
          icon={Mail}
          disabled={!contacts.email.url}
        >
          {contacts.email.label}
        </ContactButton>
        <ContactButton 
          href={contacts.linkedin.url ?? ''} 
          icon={Linkedin}
          disabled={!contacts.linkedin.url}
        >
          {contacts.linkedin.label}
        </ContactButton>
        <ContactButton 
          href={contacts.github.url ?? ''} 
          icon={Github}
          disabled={!contacts.github.url}
        >
          {contacts.github.label}
        </ContactButton>
      </div>
    </div>
  );
};

export default InfoComponent;