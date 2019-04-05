/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {A11yModule} from '@cdk/a11y';
import {OverlayModule} from '@cdk/overlay';
import {PortalModule} from '@cdk/portal';

import {Dialog} from './dialog';
import {DialogConfig} from './dialog-config';
import {CdkDialogContainer} from './dialog-container';
import {
  DIALOG_CONFIG,
  DIALOG_CONTAINER,
  DIALOG_REF,
  MAT_DIALOG_SCROLL_STRATEGY_PROVIDER
} from './dialog-injectors';
import {DialogRef} from './dialog-ref';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    A11yModule,
  ],
  exports: [
    // Re-export the PortalModule so that people extending the `CdkDialogContainer`
    // don't have to remember to import it or be faced with an unhelpful error.
    PortalModule,
    CdkDialogContainer,
  ],
  declarations: [
    CdkDialogContainer,
  ],
  providers: [
    Dialog,
    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
    {provide: DIALOG_REF, useValue: DialogRef},
    {provide: DIALOG_CONTAINER, useValue: CdkDialogContainer},
    {provide: DIALOG_CONFIG, useValue: DialogConfig},
  ],
  entryComponents: [CdkDialogContainer],
})
export class DialogModule {}
