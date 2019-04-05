/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {GestureConfig, MatCommonModule} from '@material/core';

import {MatSlider} from './slider';


@NgModule({
  imports: [CommonModule, MatCommonModule],
  exports: [MatSlider, MatCommonModule],
  declarations: [MatSlider],
  providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}]
})
export class MatSliderModule {}
