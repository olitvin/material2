/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {OverlayModule} from '@cdk/overlay';
import {MatCommonModule, MatOptionModule} from '@material/core';
import {MatFormFieldModule} from '@material/form-field';

import {MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelect, MatSelectTrigger} from './select';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MatOptionModule,
    MatCommonModule,
  ],
  exports: [MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule, MatCommonModule],
  declarations: [MatSelect, MatSelectTrigger],
  providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
})
export class MatSelectModule {}
