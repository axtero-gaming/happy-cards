import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import * as luxon from 'luxon';

import { BaseComponent } from '@shared/base';

export const HappyBirthdayDateLx = luxon.DateTime
  .fromISO(`2024-04-27T00:00:00.000Z`, { zone: 'UTC+0' }).setZone('UTC+3', { keepLocalTime: true });

@Component({
  selector: 'ag-april-hb',
  templateUrl: './april-hb.component.html',
  styleUrls: [ './april-hb.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AprilHbComponent extends BaseComponent implements OnInit {
  public cardIsVisible: boolean = true;
  public openCardIsVisible: boolean = false;
  public timerEndedAt: string = HappyBirthdayDateLx.toISO();

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
  openCard (): void {
    this.cardIsVisible = true;
    this.forceRender();
  }
}
