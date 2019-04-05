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
import {OverlayModule} from '@cdk/overlay';
import {MatButtonModule, MatCheckboxModule, MatRadioModule} from '@material';

import {ConnectedOverlayDemo} from './connected-overlay-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    OverlayModule,
    RouterModule.forChild([{path: '', component: ConnectedOverlayDemo}]),
  ],
  declarations: [ConnectedOverlayDemo],
})
export class ConnectedOverlayDemoModule {
}
