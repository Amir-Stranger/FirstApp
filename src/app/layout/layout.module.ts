import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../modules/material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BaseModule } from '../components/base.module';


@NgModule({
  declarations: [HeaderComponent, MainComponent, DashboardComponent, SideMenuComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    BaseModule,
  ],
  exports: [HeaderComponent, MainComponent, DashboardComponent, SideMenuComponent]
})
export class LayoutModule { }
