import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      name: 'Esteti',
      description:
        'A comprehensive web application for aesthetic medicine clinics, streamlining clinic operations through functionalities for appointment scheduling, client and employee management, service and product catalogs, reporting tools, and more. This user-friendly platform empowers clinics to enhance efficiency and improve patient care.',
      images: [
        '../../../assets/projects/esteti_1.jpg',
        '../../../assets/projects/esteti_2.jpg',
      ],
      github: 'https://github.com/JacobD2001/Esteti',
      technologiesIds: [8, 10, 11, 12, 13, 14],
    },
    {
      id: 2,
      name: 'Portfolio',
      description:
        'This personal portfolio showcases my skills in Angular development. Crafted with dedication, it boasts a fully responsive design for seamless access across devices. Leveraging Angular`s rich library ecosystem, I`ve implemented dark mode functionality and a theme selector offering various options like red and blue, allowing users to personalize their experience.',
      images: [
        '../../../assets/projects/portfolio_1.jpg',
        '../../../assets/projects/portfolio_2.jpg',
      ],
      github: 'https://github.com/JacobD2001/Portfolio',
      technologiesIds: [1, 2, 3, 4],
    },
  ];
  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }
  getProjectById(id: number) {
    return this.projects.filter((project) => project.id == id);
  }
}
