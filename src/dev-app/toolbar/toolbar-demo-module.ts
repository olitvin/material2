/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule
} from '@material';

import {ToolbarDemo} from './toolbar-demo';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    RouterModule.forChild([{path: '', component: ToolbarDemo}]),
  ],
  declarations: [ToolbarDemo],
})
export class ToolbarDemoModule {
}
