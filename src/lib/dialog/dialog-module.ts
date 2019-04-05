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
import {MatCommonModule} from '@material/core';

import {MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog} from './dialog';
import {MatDialogContainer} from './dialog-container';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from './dialog-content-directives';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    MatCommonModule,
  ],
  exports: [
    MatDialogContainer,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatCommonModule,
  ],
  declarations: [
    MatDialogContainer,
    MatDialogClose,
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
  ],
  providers: [
    MatDialog,
    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
  ],
  entryComponents: [MatDialogContainer],
})
export class MatDialogModule {}
