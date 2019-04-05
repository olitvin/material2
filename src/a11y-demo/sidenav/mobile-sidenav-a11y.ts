/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@cdk/layout';


@Component({
  moduleId: module.id,
  selector: 'mobile-sidenav-a11y',
  templateUrl: 'mobile-sidenav-a11y.html',
  styleUrls: ['shared.css', 'mobile-sidenav-a11y.css'],
  host: {'class': 'demo-a11y-sidenav-app'},
})
export class SidenavMobileAccessibilityDemo implements OnDestroy {
  mobileQuery: MediaQueryList;

  filler = Array(20).fill(0);

  _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
