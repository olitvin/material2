/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {PlatformModule} from '@cdk/platform';

import {CdkAutofill} from './autofill';
import {CdkTextareaAutosize} from './autosize';


@NgModule({
  declarations: [CdkAutofill, CdkTextareaAutosize],
  imports: [PlatformModule],
  exports: [CdkAutofill, CdkTextareaAutosize],
})
export class TextFieldModule {}
