import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      name: 'Weather App',
      description:
        'Web application that shows the weather of a city through a search engine made in django using the requests library to make http requests with the python programming language.',
      images: [
        '../../../assets/projects/weather_ app.png',
        '../../../assets/projects/eskrive.png',
      ],
      github: 'https://github.com/johngualteros/climate_app',
      technologiesIds: [1, 2, 3, 4],
    },
    {
      id: 2,
      name: 'Portfolio (this project)',
      description:
        'This is my personal portfolio, made with angular with a lot of love and dedication. It is fully responsive. For this project, I used several libraries offered by Angular. includes dark mode and theme selector such as red, blue etc.',
      images: [
        '../../../assets/projects/weather_ app.png',
        '../../../assets/projects/eskrive.png',
      ],
      github: 'https://github.com/johngualteros/portfolio_personal_angular',
      technologiesIds: [10, 11, 12, 13, 14],
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
