import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { IdeasComponent } from './ideas/ideas.component';
import { CharitableActsComponent } from './charitable-acts/charitable-acts.component';
import{ CrowdFundComponent } from './crowd-fund/crowd-fund.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'ideas',
    component: IdeasComponent
  },
  {
    path: 'charitable-acts',
    component: CharitableActsComponent
  },
  {
    path: ':objectType/:id',
    component: CrowdFundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
