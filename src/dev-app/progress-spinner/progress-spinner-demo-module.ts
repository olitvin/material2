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
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatProgressSpinnerModule
} from '@material';

import {ProgressSpinnerDemo} from './progress-spinner-demo';

@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([{path: '', component: ProgressSpinnerDemo}]),
  ],
  declarations: [ProgressSpinnerDemo],
})
export class ProgressSpinnerDemoModule {
}
