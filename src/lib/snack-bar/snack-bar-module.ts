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
import {PortalModule} from '@cdk/portal';
import {MatButtonModule} from '@material/button';
import {MatCommonModule} from '@material/core';

import {SimpleSnackBar} from './simple-snack-bar';
import {MatSnackBarContainer} from './snack-bar-container';


@NgModule({
  imports: [
    OverlayModule,
    PortalModule,
    CommonModule,
    MatButtonModule,
    MatCommonModule,
  ],
  exports: [MatSnackBarContainer, MatCommonModule],
  declarations: [MatSnackBarContainer, SimpleSnackBar],
  entryComponents: [MatSnackBarContainer, SimpleSnackBar],
})
export class MatSnackBarModule {}
