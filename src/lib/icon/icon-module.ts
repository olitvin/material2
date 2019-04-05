/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {MatCommonModule} from '@material/core';
import {MatIcon} from './icon';


@NgModule({
  imports: [MatCommonModule],
  exports: [MatIcon, MatCommonModule],
  declarations: [MatIcon],
})
export class MatIconModule {}
