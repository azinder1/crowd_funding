import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { IdeaService } from '../services/idea.service';
import { Project } from '../project.model';
import { ProjectService } from '../services/project.service';
import { CharitableAct } from '../charitable-act.model';
import { CharitableActService } from '../services/charitable-act.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [IdeaService, ProjectService, CharitableActService]
})


export class HomePageComponent implements OnInit {

  constructor(router: Router, private ideaService: IdeaService, private projectService: ProjectService, private charitableActService: CharitableActService) { }

  ngOnInit() {
  }

  fundingType: string = 'project';

  setFundingType(clickedInput: string) {
    this.fundingType = clickedInput;
  }

  submitForm(newName: string, newCreator: string, newDescription: string, newFundGoal: string, newImage: string): void {
    newImage = (newImage) ? newImage : '../../assets/img/no-image.png';
    if (this.fundingType === 'project') {
      let newProject: Project = new Project(newName, newCreator, parseInt(newFundGoal), newImage, newDescription);

      this.projectService.addProject(newProject);

    } else if (this.fundingType === 'charitableAct') {
      let newCharitableAct: CharitableAct = new CharitableAct(newName, newCreator, parseInt(newFundGoal), newImage, newDescription);
      this.charitableActService.addCharitableAct(newCharitableAct);

    } else if (this.fundingType === 'idea') {
      let newIdea: Idea = new Idea(newName, newCreator, parseInt(newFundGoal), newImage, newDescription);
      this.ideaService.addIdea(newIdea);
    }
  }

}
