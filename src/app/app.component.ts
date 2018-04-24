import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _router: Router) {};

  ngOnInit() {
    /**
     * Control first comes here 
     */
    this._router.navigate(["/dashboard"]);
  }

}
