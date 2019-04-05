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
import {MatCommonModule, MatRippleModule} from '@material/core';

import {MatMenuContent} from './menu-content';
import {MatMenu} from './menu-directive';
import {MatMenuItem} from './menu-item';
import {
  MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatMenuTrigger,
} from './menu-trigger';


@NgModule({
  imports: [
    CommonModule,
    MatCommonModule,
    MatRippleModule,
    OverlayModule,
  ],
  exports: [MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent, MatCommonModule],
  declarations: [MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent],
  providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
})
export class MatMenuModule {}
