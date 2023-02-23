import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '@shared/base';
import * as Constants from '@shared/constants';

@Component({
  selector: 'ag-valentine-page',
  templateUrl: './valentine-page.component.html',
  styleUrls: [ './valentine-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValentinePageComponent extends BaseComponent implements OnInit {
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
}
