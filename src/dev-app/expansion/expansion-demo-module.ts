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
import {CdkAccordionModule} from '@cdk/accordion';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule
} from '@material';

import {ExpansionDemo} from './expansion-demo';

@NgModule({
  imports: [
    CdkAccordionModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    RouterModule.forChild([{path: '', component: ExpansionDemo}]),
  ],
  declarations: [ExpansionDemo],
})
export class ExpansionDemoModule {
}
