/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ObserversModule} from '@cdk/observers';
import {MatCommonModule, MatRippleModule} from '@material/core';

import {MatCheckbox} from './checkbox';
import {MatCheckboxRequiredValidator} from './checkbox-required-validator';


@NgModule({
  imports: [CommonModule, MatRippleModule, MatCommonModule, ObserversModule],
  exports: [MatCheckbox, MatCheckboxRequiredValidator, MatCommonModule],
  declarations: [MatCheckbox, MatCheckboxRequiredValidator],
})
export class MatCheckboxModule {}
