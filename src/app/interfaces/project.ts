export interface Project{
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  secondaryAccount?: string;
  primaryAccount?: string;
  technologiesIds: number[];
}
