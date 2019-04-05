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
import {DragDropModule} from '@cdk/drag-drop';
import {MatFormFieldModule, MatIconModule, MatSelectModule} from '@material';

import {DragAndDropDemo} from './drag-drop-demo';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forChild([{path: '', component: DragAndDropDemo}]),
  ],
  declarations: [DragAndDropDemo],
})
export class DragDropDemoModule {
}
