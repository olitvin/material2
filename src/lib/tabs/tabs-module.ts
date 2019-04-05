/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {A11yModule} from '@cdk/a11y';
import {ObserversModule} from '@cdk/observers';
import {PortalModule} from '@cdk/portal';
import {MatCommonModule, MatRippleModule} from '@material/core';

import {MatInkBar} from './ink-bar';
import {MatTab} from './tab';
import {MatTabBody, MatTabBodyPortal} from './tab-body';
import {MatTabContent} from './tab-content';
import {MatTabGroup} from './tab-group';
import {MatTabHeader} from './tab-header';
import {MatTabLabel} from './tab-label';
import {MatTabLabelWrapper} from './tab-label-wrapper';
import {MatTabLink, MatTabNav} from './tab-nav-bar/tab-nav-bar';


@NgModule({
  imports: [
    CommonModule,
    MatCommonModule,
    PortalModule,
    MatRippleModule,
    ObserversModule,
    A11yModule,
  ],
  // Don't export all components because some are only to be used internally.
  exports: [
    MatCommonModule,
    MatTabGroup,
    MatTabLabel,
    MatTab,
    MatTabNav,
    MatTabLink,
    MatTabContent,
  ],
  declarations: [
    MatTabGroup,
    MatTabLabel,
    MatTab,
    MatInkBar,
    MatTabLabelWrapper,
    MatTabNav,
    MatTabLink,
    MatTabBody,
    MatTabBodyPortal,
    MatTabHeader,
    MatTabContent,
  ],
})
export class MatTabsModule {}
