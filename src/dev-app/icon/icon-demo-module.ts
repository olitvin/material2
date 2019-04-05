/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@material';

import {IconDemo} from './icon-demo';

@NgModule({
  imports: [
    MatIconModule,
    RouterModule.forChild([{path: '', component: IconDemo}]),
  ],
  declarations: [IconDemo],
})
export class IconDemoModule {
}
