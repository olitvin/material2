/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {A11yModule} from '@cdk/a11y';
import {MatCommonModule} from '@material/core';

import {MatBadge} from './badge';


@NgModule({
  imports: [
    A11yModule,
    MatCommonModule
  ],
  exports: [MatBadge],
  declarations: [MatBadge],
})
export class MatBadgeModule {}
