import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {FocusMonitor, FocusOrigin} from '@cdk/a11y';

/** @title Focusing with a specific FocusOrigin */
@Component({
  selector: 'focus-monitor-focus-via-example',
  templateUrl: 'focus-monitor-focus-via-example.html',
  styleUrls: ['focus-monitor-focus-via-example.css']
})
export class FocusMonitorFocusViaExample implements OnDestroy, AfterViewInit {
  @ViewChild('monitored') monitoredEl: ElementRef<HTMLElement>;

  origin = this.formatOrigin(null);

  constructor(public focusMonitor: FocusMonitor,
              private cdr: ChangeDetectorRef,
              private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.focusMonitor.monitor(this.monitoredEl)
        .subscribe(origin => this.ngZone.run(() => {
          this.origin = this.formatOrigin(origin);
          this.cdr.markForCheck();
        }));
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.monitoredEl);
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }
}
