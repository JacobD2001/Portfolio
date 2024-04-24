import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() storedTheme: any;
  frontendSkills: Skill[];
  backendSkills: Skill[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.frontendSkills = this.skillsService.getFrontendSkills();
    this.backendSkills = this.skillsService.getBackendSkills();
  }
}
