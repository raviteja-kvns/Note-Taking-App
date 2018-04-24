import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const AppComponentRoutes: Routes = [
  { path: "", component: AppComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppComponentRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }