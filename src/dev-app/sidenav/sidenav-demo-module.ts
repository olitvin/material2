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
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule} from '@material';

import {SidenavDemo} from './sidenav-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forChild([{path: '', component: SidenavDemo}]),
  ],
  declarations: [SidenavDemo],
})
export class SidenavDemoModule {
}
