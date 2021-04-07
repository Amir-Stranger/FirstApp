import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { MaterialModule } from '../modules/material.module';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { SharedModule } from '../modules/shared.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { MatIconModule } from '@angular/material/icon';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { ListsComponent } from './lists/lists.component';


@NgModule({
  declarations: [ResumeComponent, TemplateDrivenComponent, ReactiveFormComponent, NestedFormComponent, DynamicFormsComponent, ListsComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    MaterialModule,
    SharedModule,
    MatIconModule
  ],
  exports: [
    ResumeComponent,
    MaterialModule,
  ]
})
export class BaseModule { }
