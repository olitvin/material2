/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@material/core';

import {MatProgressBar} from './progress-bar';


@NgModule({
  imports: [CommonModule, MatCommonModule],
  exports: [MatProgressBar, MatCommonModule],
  declarations: [MatProgressBar],
})
export class MatProgressBarModule {}
