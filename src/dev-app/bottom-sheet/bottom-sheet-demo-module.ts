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
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule
} from '@material';

import {BottomSheetDemo, ExampleBottomSheet} from './bottom-sheet-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    RouterModule.forChild([{path: '', component: BottomSheetDemo}]),
  ],
  declarations: [BottomSheetDemo, ExampleBottomSheet],
  entryComponents: [ExampleBottomSheet],
})
export class BottomSheetDemoModule {
}
