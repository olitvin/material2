/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {A11yModule} from '@cdk/a11y';
import {MatButtonModule} from '@material';

import {LiveAnnouncerDemo} from './live-announcer-demo';

@NgModule({
  imports: [
    A11yModule,
    MatButtonModule,
    RouterModule.forChild([{path: '', component: LiveAnnouncerDemo}]),
  ],
  declarations: [LiveAnnouncerDemo],
})
export class LiveAnnouncerDemoModule {
}
