import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  //add lazy modules to routing
  {
    path: "Forms", loadChildren: () => import('./layout/layout.module').then(q => q.LayoutModule)
  },
  {
    path: "base", loadChildren: () => import('./components/base.module').then(q => q.BaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
