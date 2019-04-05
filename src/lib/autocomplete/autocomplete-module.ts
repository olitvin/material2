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
import {MatCommonModule, MatOptionModule} from '@material/core';

import {MatAutocomplete} from './autocomplete';
import {MatAutocompleteOrigin} from './autocomplete-origin';
import {
  MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatAutocompleteTrigger,
} from './autocomplete-trigger';

@NgModule({
  imports: [MatOptionModule, OverlayModule, MatCommonModule, CommonModule],
  exports: [
    MatAutocomplete,
    MatOptionModule,
    MatAutocompleteTrigger,
    MatAutocompleteOrigin,
    MatCommonModule
  ],
  declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
  providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class MatAutocompleteModule {}
