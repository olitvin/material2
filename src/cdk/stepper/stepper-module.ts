/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BidiModule} from '@cdk/bidi';

import {CdkStepHeader} from './step-header';
import {CdkStepLabel} from './step-label';
import {CdkStep, CdkStepper} from './stepper';
import {CdkStepperNext, CdkStepperPrevious} from './stepper-button';

@NgModule({
  imports: [BidiModule, CommonModule],
  exports: [
    CdkStep,
    CdkStepper,
    CdkStepHeader,
    CdkStepLabel,
    CdkStepperNext,
    CdkStepperPrevious,
  ],
  declarations: [
    CdkStep,
    CdkStepper,
    CdkStepHeader,
    CdkStepLabel,
    CdkStepperNext,
    CdkStepperPrevious,
  ]
})
export class CdkStepperModule {}
