import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { Skill } from 'src/app/interfaces/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {

  @Input() project: Project;
  frontendSkills: Skill[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.frontendSkills = this.skillsService.getFrontendSkills();
  }

}
