export interface Project {
    id: string;
    createdAt: Date;
    title: string;
    github: string;
    image: string;
    updatedAt: Date;
    published: boolean;
    description: string;
    deploy: string;
    userId: string;
    stackIds: string[];
  }
  