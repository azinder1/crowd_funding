import { Injectable } from '@angular/core';
import { Project } from '../project.model';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()

export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(project: Project):void {
    this.projects.push(project);
  }

  getProjectById(id: string) {
    return this.angularFire.database.object('projects/' + id);
  }

}
