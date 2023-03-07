import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as luxon from 'luxon';

import { BaseComponent } from '@shared/base';
import { Constants, Interfaces, Enums } from '../../shared';

// 23  24 26 28 2 4 6  8

@Component({
  selector: 'ag-eight-march-page',
  templateUrl: './eight-march-page.component.html',
  styleUrls: [ './eight-march-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EightMarchPageComponent extends BaseComponent implements OnInit {
  public DayView = Enums.DayView;
  public snowflakes: number[];
  public activeDayIndex: number = 0;
  public currentDayIndex: number = 0;
  public currentDay: number = 0;
  public currentDayNotificationIsShown: boolean = true;
  public activeFlower: number = 0;
  public currentDayDescriptors: Interfaces.DayDescriptor;
  public currentDaysIsLast: boolean;
  public poemIsVisible: boolean = true;
  public poemHideAnimationIsEnabled: boolean = false;

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    const dayDistance = Math.floor(Math.abs(Constants.StartDay.diffNow('days').days));
    // const maxDayDistance = Math.floor(Math.abs(Constants.StartDay.diff(Constants.EightMarchDayLx, 'days').days));
    const nextDayNumber = Constants.EightMarchDayLx > luxon.DateTime.utc()
      ? dayDistance : Constants.DayDescriptors.length - 1;

    // const nextDayNumber = 13;
    this.activeDayIndex = nextDayNumber;
    this.currentDayIndex = nextDayNumber;
    this.currentDaysIsLast = nextDayNumber === Constants.DayDescriptors.length - 1;

    this.updateView();
  }

  /**
   * Closes the poem overlay.
   *
   * @return {void}
   */
  closePoem (): void {
    this.poemHideAnimationIsEnabled = true;
    this.render(`poemHideAnimationIsEnabled`, [ this.poemHideAnimationIsEnabled ]);

    // setTimeout(() => {
    //   this.poemIsVisible = false;
    //   this.forceRender();
    // }, 3100);
  }

  /**
   * Renders the active day.
   */
  updateView (): void {
    this.currentDayDescriptors = Constants.DayDescriptors[this.activeDayIndex];

    this.currentDay = this.currentDayDescriptors.day;

    this.activeFlower = this.currentDayDescriptors.flowerStep;
    this.snowflakes = this.currentDayDescriptors.snowView?.snowflakesAreEnabled === true
      ? new Array(this.currentDayDescriptors.snowView?.snowflakesIntensity ?? 50) : [];

    this.currentDayNotificationIsShown = this.localStorageService.getValue(Constants.PreviewIsShownKey) ?? true;
    // const lastSeenDay = this.localStorageService.getValue(Constants.LastSeenDayKey);
    // let lastSeenDayCounter = this.localStorageService.getValue(Constants.LastSeenDayCounterKey) ?? 0;
    // if (nextDayNumber !== lastSeenDay) {
    //   this.currentDayNotificationIsShown = true;
    //   lastSeenDayCounter = 1;
    // } else if (lastSeenDayCounter < 3) {
    //   this.currentDayNotificationIsShown = true;
    //   lastSeenDayCounter += 1;
    // } else {
    //   this.currentDayNotificationIsShown = false;
    // }

    // this.localStorageService.setValue(Constants.LastSeenDayKey, nextDayNumber);
    // this.localStorageService.setValue(Constants.LastSeenDayCounterKey, lastSeenDayCounter);

    this.forceRender();
  }

  /**
   * Moves the active day to prev day.
   *
   * @return {void}
   */
  moveToPrevDay (): void {
    if (this.activeDayIndex <= 0) {
      return;
    }

    this.activeDayIndex -= 1;
    this.updateView();
  }

  /**
   * Moves the active day to next day.
   *
   * @return {void}
   */
  moveToNextDay (): void {
    if (this.activeDayIndex >= this.currentDayIndex) {
      return;
    }

    this.activeDayIndex += 1;
    this.updateView();
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
