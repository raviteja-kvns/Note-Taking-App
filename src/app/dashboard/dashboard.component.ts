import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'editor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    /**
     * Can place code to handle custom routing 
     * say a custom first time dashboard for a new user
     * or a repeat dashboard for existing user
     * 
     * In our app -> we are using only one repeat dashboard
     */

  }

}
