import { Component, ViewEncapsulation } from '@angular/core';
var bundles = require('./bundles');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  bundlesList: Object = bundles;
}
