/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {ObserversModule} from '@cdk/observers';
import {GestureConfig, MatCommonModule, MatRippleModule} from '@material/core';

import {MatSlideToggle} from './slide-toggle';


@NgModule({
  imports: [MatRippleModule, MatCommonModule, ObserversModule],
  exports: [MatSlideToggle, MatCommonModule],
  declarations: [MatSlideToggle],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
  ],
})
export class MatSlideToggleModule {}
