import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../modules/material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BaseModule } from '../components/base.module';
import { SiteInfoComponent } from './site-info/site-info.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../modules/shared.module';


@NgModule({
  declarations: [HeaderComponent, MainComponent, DashboardComponent, SideMenuComponent, SiteInfoComponent, LoginFormComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    BaseModule,
    SharedModule
  ],
  exports: [HeaderComponent, MainComponent, DashboardComponent, SideMenuComponent, LoginFormComponent]
})
export class LayoutModule { }
