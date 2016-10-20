import { Component, ViewEncapsulation } from '@angular/core';
var bundles = require('./bundles');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  bundlesList = bundles;
}
