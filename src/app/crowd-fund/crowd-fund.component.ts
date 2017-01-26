import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../idea.model';
import { IdeaService } from '../services/idea.service';
import { Project } from '../project.model';
import { ProjectService } from '../services/project.service';
import { CharitableAct } from '../charitable-act.model';
import { CharitableActService } from '../services/charitable-act.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location} from '@angular/common'

@Component({
  selector: 'app-crowd-fund',
  templateUrl: './crowd-fund.component.html',
  styleUrls: ['./crowd-fund.component.css'],
  providers: [IdeaService, ProjectService, CharitableActService]
})
export class CrowdFundComponent implements OnInit {

  objectType: string;
  objectId: string;
  displayObject: any;


  constructor(private ideaService: IdeaService,
              private projectService: ProjectService,
              private charitableActService: CharitableActService, private route: ActivatedRoute,
              private location: Location
              ){}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.objectType = urlParameters['objectType'];
      this.objectId = urlParameters['id'];
    });
    if (this.objectType === 'projects') {
      this.displayObject = this.projectService.getProjectById(this.objectId);
    } else if (this.objectType === 'ideas') {
      this.displayObject = this.ideaService.getIdeaById(this.objectId);
    } else if (this.objectType === 'charitableActs') {
      this.displayObject = this.charitableActService.getCharitableActById(this.objectId);
    }
  }
}
