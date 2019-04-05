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
import {MatBadgeModule, MatButtonModule, MatIconModule} from '@material';

import {BadgeDemo} from './badge-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild([{path: '', component: BadgeDemo}]),
  ],
  declarations: [BadgeDemo],
})
export class BadgeDemoModule {
}
