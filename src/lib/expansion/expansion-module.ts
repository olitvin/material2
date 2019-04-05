/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CdkAccordionModule} from '@cdk/accordion';
import {PortalModule} from '@cdk/portal';

import {MatAccordion} from './accordion';
import {MatExpansionPanel, MatExpansionPanelActionRow} from './expansion-panel';
import {MatExpansionPanelContent} from './expansion-panel-content';
import {
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from './expansion-panel-header';


@NgModule({
  imports: [CommonModule, CdkAccordionModule, PortalModule],
  exports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelActionRow,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelContent,
  ],
  declarations: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelActionRow,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelContent,
  ],
})
export class MatExpansionModule {}
