/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatButtonToggleModule, MatProgressBarModule} from '@material';

import {ProgressBarDemo} from './progress-bar-demo';

@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    RouterModule.forChild([{path: '', component: ProgressBarDemo}]),
  ],
  declarations: [ProgressBarDemo],
})
export class ProgressBarDemoModule {
}
