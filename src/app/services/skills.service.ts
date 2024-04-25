import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skill[] = [
    {
      id: 1,
      title: 'Angular',
      image: '../../assets/logos_portfolio/Angular.png',
      category: 'frontend'
    },
    {
      id: 2,
      title: 'Typescript',
      image: '../../assets/logos_portfolio/Typescript.svg',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Javascript',
      image: '../../assets/logos_portfolio/JavaScript.png',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Html',
      image: '../../assets/logos_portfolio/html.png',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'Sass',
      image: '../../assets/logos_portfolio/sass.png',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'Css',
      image: '../../assets/logos_portfolio/css.webp',
      category: 'frontend'
    },
    {
      id: 7,
      title: 'Bootstrap',
      image: '../../assets/logos_portfolio/Bootstrap.png',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'c#',
      image: '../../assets/logos_portfolio/csharp.png',
      category: 'backend'
    },
    {
      id: 9,
      title: '.NET',
      image: '../../assets/logos_portfolio/NET.png',
      category: 'backend'
    },
    {
      id: 10,
      title: 'SQL',
      image: '../../assets/logos_portfolio/SQL.png',
      category: 'backend'
    },
    {
      id: 11,
      title: 'Azure',
      image: '../../assets/logos_portfolio/azure.png',
      category: 'backend'
    },
    {
      id: 12,
      title: 'Entity Framework',
      image: '../../assets/logos_portfolio/EFCore.png',
      category: 'backend'
    },
    {
      id: 13,
      title: 'Azure Functions',
      image: '../../assets/logos_portfolio/azureFunc.png',
      category: 'backend'
    },
    {
      id: 14,
      title: 'OpenAPI',
      image: '../../assets/logos_portfolio/openAPI.png',
      category: 'backend'
    },
    {
      id: 15,
      title: 'REST',
      image: '../../assets/logos_portfolio/rest.webp',
      category: 'backend'
    },
    {
      id: 16,
      title: 'Git',
      image: '../../assets/logos_portfolio/git.png',
      category: 'backend'
    },
    {
      id: 17,
      title: 'Docker',
      image: '../../assets/logos_portfolio/docker.webp',
      category: 'backend'
    },
    {
      id: 18,
      title: 'Web api',
      image: '../../assets/logos_portfolio/webApi.png',
      category: 'backend'
    },
    {
      id: 19,
      title: 'ASP.NET Core',
      image: '../../assets/logos_portfolio/ASP.png',
      category: 'backend'
    }
  ];

  constructor() { }

  getFrontendSkills(): Skill[]{
    return this.skills.filter(skill => skill.category === 'frontend');
  }

  getBackendSkills(): Skill[]{
    return this.skills.filter(skill => skill.category === 'backend');
  }

  getSkillsByIds(ids: number[]): Skill[]{
    return this.skills.filter(skill => ids.includes(skill.id));
  }

}
