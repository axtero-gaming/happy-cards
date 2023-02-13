import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '@shared/base';
import * as Constants from '@shared/constants';

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent implements OnInit {
  public loversCardIsVisible: boolean = false;
  public openCardIsVisible: boolean = false;
  public timerEndedAt: string = Constants.ValentinesDayLx.toISO();

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    this.forceRender();
  }

  /**
   * Hides the timer and shows the Open button.
   *
   * @return {void}
   */
  onTimerEnded (): void {
    this.openCardIsVisible = true;
    this.forceRender();
  }

  /**
   * Hides the timer's view and opens card.
   *
   * @return {void}
   */
  openLovers (): void {
    this.loversCardIsVisible = true;
    this.forceRender();
  }

  /**
   * Triggers a render of UI if router outlet renders component.
   *
   * FYI[WORKAROUND]: Angular doesn't trigger component's hooks if we load them via Router.
   * We observe and `activate` output property to trigger a render manually.
   *
   * @return {void}
   */
  onRouteActivated (): void {
    this.forceRender();
  }
}
