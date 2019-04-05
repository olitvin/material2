/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule} from '@material';

import {ListDemo} from './list-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild([{path: '', component: ListDemo}]),
  ],
  declarations: [ListDemo],
})
export class ListDemoModule {
}
