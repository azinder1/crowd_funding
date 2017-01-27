import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})

export class ProjectsComponent implements OnInit {
  objectType: string;

  projects: FirebaseListObservable<any[]>

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
  goToDetailPage(clickedProject): void {
    this.router.navigate(['projects', clickedProject.$key]);
  }
}
