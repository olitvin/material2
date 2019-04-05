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
import {ScrollingModule as ExperimentalScrollingModule} from '@cdk-experimental/scrolling';
import {ScrollingModule} from '@cdk/scrolling';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@material';

import {VirtualScrollDemo} from './virtual-scroll-demo';

@NgModule({
  imports: [
    CommonModule,
    ExperimentalScrollingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ScrollingModule,
    RouterModule.forChild([{path: '', component: VirtualScrollDemo}]),
  ],
  declarations: [VirtualScrollDemo],
})
export class VirtualScrollDemoModule {
}
