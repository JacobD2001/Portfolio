import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { Skill } from 'src/app/interfaces/skill';
import { Studies } from 'src/app/interfaces/studies';
import { ProjectsService } from 'src/app/services/projects.service';
import { SkillsService } from 'src/app/services/skills.service';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  id!: number;
  storedTheme?: string | null =
    localStorage.getItem('theme-color') || 'theme-blue';
  projects?: Project[];
  projectTechnologies: Skill[];


  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.projects = this.projectsService.getProjectById(this.id);
    this.projectTechnologies = this.skillsService.getSkillsByIds(this.projects[0].technologiesIds);
  }

  changeColor(theme: string) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }
}
