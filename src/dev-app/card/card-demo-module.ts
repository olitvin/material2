/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule} from '@material';

import {CardDemo} from './card-demo';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    RouterModule.forChild([{path: '', component: CardDemo}]),
  ],
  declarations: [CardDemo],
})
export class CardDemoModule {
}
