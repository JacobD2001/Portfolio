import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { Skill } from 'src/app/interfaces/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
})
export class CardProjectComponent implements OnInit {
  @Input() project: Project;
  projectTechnologies: Skill[];
  currentImageIndex: number = 0;

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.projectTechnologies = this.skillsService.getSkillsByIds(
      this.project.technologiesIds
    );
  }

  showNextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
  }

  showPreviousImage(): void{
    if(this.currentImageIndex === 0){
      this.currentImageIndex = this.project.images.length - 1;
    } else{
      this.currentImageIndex -= 1;
    }
  }
}
