import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RuserComponent } from './ruser/ruser.component';
import { DashboardComponent } from './dashboard.component';
import { DcomponentsModule } from "./dcomponents/dcomponents.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DcomponentsModule
  ],
  declarations: [RuserComponent, DashboardComponent]
})
export class DashboardModule { }
