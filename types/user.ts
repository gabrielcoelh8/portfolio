import { Project } from "./project";
import { Stack } from "./stack";

export interface User {
  id: string;
  name: string | null;
  title: string | null;
  education: string | null;
  email: string | null;
  cv: string | null;
  linkedin: string | null;
  github: string | null;
  projects: Project[];
  stacks: Stack[];
}
