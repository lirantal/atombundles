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
  userBundles: Object = {};

  toggleSelected(event: any, bundleName: string, packageName: string) {

    if (!this.userBundles.hasOwnProperty(bundleName)) {
      Object.defineProperty(this.userBundles, bundleName, {
        value: []
      });
    }

    let pkgIndex = this.userBundles[bundleName].indexOf(packageName);
    if (pkgIndex === -1) {
        this.userBundles[bundleName].push(packageName);
        event.target.className = "btn btn-primary";
    } else {
        this.userBundles[bundleName].splice(pkgIndex, 1);
        event.target.className = "btn btn-secondary";
    }

  }

  getSelected(bundleName: string) {
    if (this.userBundles[bundleName] && this.userBundles[bundleName].length > 0) {
      return this.userBundles[bundleName].join(' ');
    }
  }

}
