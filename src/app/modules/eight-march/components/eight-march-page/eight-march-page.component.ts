import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as luxon from 'luxon';

import { BaseComponent } from '@shared/base';
import { Constants, Interfaces } from '../../shared';

// 23  24 26 28 2 4 6  8

@Component({
  selector: 'ag-eight-march-page',
  templateUrl: './eight-march-page.component.html',
  styleUrls: [ './eight-march-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EightMarchPageComponent extends BaseComponent implements OnInit {
  public snowflakes;
  public currentDay: number = 0;
  public activeFlower: number = 0;
  public currentDayDescriptors: Interfaces.DayDescriptor;

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    const dayDistance = Math.floor(Math.abs(Constants.StartDay.diffNow('days').days));
    const maxDayDistance = Math.floor(Math.abs(Constants.StartDay.diff(Constants.EightMarchDayLx, 'days').days));
    const nextDayNumber = Constants.EightMarchDayLx > luxon.DateTime.utc()
      ? dayDistance : Constants.DayDescriptors.length - 1;
    this.currentDayDescriptors = Constants.DayDescriptors[nextDayNumber];
    this.currentDay = this.currentDayDescriptors.day;
    this.activeFlower = this.currentDayDescriptors.flowerStep;
    this.snowflakes = this.currentDayDescriptors.snowflakesAreEnabled === true
      ? new Array(this.currentDayDescriptors.snowflakesIntensity ?? 50) : [];
    this.forceRender();
  }

  /**
   * Hides the timer and shows the Open button.
   *
   * @return {void}
   */
  onTimerEnded (): void {
    // this.openCardIsVisible = true;
    this.forceRender();
  }
}
