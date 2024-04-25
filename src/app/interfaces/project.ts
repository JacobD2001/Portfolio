export interface Project{
  id: number;
  name: string;
  description: string;
  images: string[];
  github: string;
  secondaryAccount?: string;
  primaryAccount?: string;
  technologiesIds: number[];
}
