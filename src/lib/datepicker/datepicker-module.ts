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
import {OverlayModule} from '@cdk/overlay';
import {PortalModule} from '@cdk/portal';
import {MatButtonModule} from '@material/button';
import {MatDialogModule} from '@material/dialog';

import {MatCalendar, MatCalendarHeader} from './calendar';
import {MatCalendarBody} from './calendar-body';
import {
  MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatDatepicker,
  MatDatepickerContent,
} from './datepicker';
import {MatDatepickerInput} from './datepicker-input';
import {MatDatepickerIntl} from './datepicker-intl';
import {MatDatepickerToggle, MatDatepickerToggleIcon} from './datepicker-toggle';
import {MatMonthView} from './month-view';
import {MatMultiYearView} from './multi-year-view';
import {MatYearView} from './year-view';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    OverlayModule,
    A11yModule,
    PortalModule,
  ],
  exports: [
    MatCalendar,
    MatCalendarBody,
    MatDatepicker,
    MatDatepickerContent,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerToggleIcon,
    MatMonthView,
    MatYearView,
    MatMultiYearView,
    MatCalendarHeader,
  ],
  declarations: [
    MatCalendar,
    MatCalendarBody,
    MatDatepicker,
    MatDatepickerContent,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerToggleIcon,
    MatMonthView,
    MatYearView,
    MatMultiYearView,
    MatCalendarHeader,
  ],
  providers: [
    MatDatepickerIntl,
    MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
  ],
  entryComponents: [
    MatDatepickerContent,
    MatCalendarHeader,
  ]
})
export class MatDatepickerModule {}
