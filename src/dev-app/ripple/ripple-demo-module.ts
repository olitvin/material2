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
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule
} from '@material';

import {ExampleModule} from '../example/example-module';

import {RippleDemo} from './ripple-demo';

@NgModule({
  imports: [
    ExampleModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    RouterModule.forChild([{path: '', component: RippleDemo}]),
  ],
  declarations: [RippleDemo],
})
export class RippleDemoModule {
}
