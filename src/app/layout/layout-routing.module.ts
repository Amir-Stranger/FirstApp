import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from '../components/resume/resume.component';
import { MainComponent } from './main/main.component';
import { SiteInfoComponent } from './site-info/site-info.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'info', component: SiteInfoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
