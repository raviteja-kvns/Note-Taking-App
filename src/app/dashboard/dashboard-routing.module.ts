import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuserComponent } from './ruser/ruser.component';
import { DashboardComponent } from "./dashboard.component";

const dashboardRoutes: Routes = [{
  path: "dashboard",
  component: DashboardComponent,
  children: [
    { path: "", component: RuserComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }