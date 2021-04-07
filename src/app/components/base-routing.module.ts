import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { ListsComponent } from './lists/lists.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: "TemplateDriven", component: TemplateDrivenComponent },
  { path: "ReactiveForm", component: ReactiveFormComponent },
  { path: "NestedForm", component: NestedFormComponent },
  { path: "DynamicForm", component: DynamicFormsComponent },
  { path: "Lists", component: ListsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
