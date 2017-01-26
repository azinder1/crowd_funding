import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea.model';
import { IdeaService } from '../services/idea.service';
import { Project } from '../project.model';
import { ProjectService } from '../services/project.service';
import { CharitableAct } from '../charitable-act.model';
import { CharitableActService } from '../services/charitable-act.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(newName: string, newCreator: string, newDescription: string, newFundGoal: string, newImage: string, objectType: string) {

  }

}
