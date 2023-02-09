import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import * as luxon from 'luxon';

import { BaseComponent } from '../../shared';

interface TimerDescriptor {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ValentinesDayLx = luxon.DateTime
  .fromISO(`2023-02-14T00:00:00.000Z`, { zone: 'UTC+0' }).setZone('UTC+3', { keepLocalTime: true });

@Component({
  selector: 'ag-timer',
  templateUrl: './timer.component.html',
  styleUrls: [ './timer.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent extends BaseComponent implements OnInit {
  public timerDescriptor: TimerDescriptor;

  @Output()
  private onTimerEnded: EventEmitter<boolean> = new EventEmitter();

  private restTimer = null;

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    this.timerDescriptor = this.getRestTimerTime();
    if (this.timerIsOver(this.timerDescriptor) === true) {
      this.onTimerEnded.emit(true);
      this.forceRender();
      return;
    }

    this.restTimer = setInterval(() => {
      this.timerDescriptor = this.getRestTimerTime();
      this.render(`timer`, [ ...Object.values(this.timerDescriptor) ]);
      if (this.timerIsOver(this.timerDescriptor) === true) {
        this.onTimerEnded.emit(true);
        return;
      }
    }, 1000);

    this.forceRender();
  }

  /**
   * Returns `true` if timer is over.
   *
   * @param  {TimerDescriptor} timerDescriptor
   * @return {boolean}
   */
  timerIsOver (timerDescriptor: TimerDescriptor): boolean {
    return _.every(Object.values(timerDescriptor), (timeValue) => {
      return timeValue === 0;
    });
  }

  /**
   * Returns the rest timer time to Valentines day.
   *
   * @return {TimerDescriptor}
   */
  getRestTimerTime (): TimerDescriptor {
    const nowLx = luxon.DateTime.now();
    const diff = ValentinesDayLx.diff(nowLx, 'seconds');
    if (diff.seconds < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const diffSeconds = Math.floor(Math.abs(diff.seconds));

    const SecondsInMin = 60;
    const SecondsInHour = SecondsInMin * 60;
    const SecondsInDay = SecondsInHour * 24;

    const restDays = Math.floor(diffSeconds / SecondsInDay);
    const restDaysInSec = restDays * SecondsInDay;
    const restHours = Math.floor((diffSeconds - restDaysInSec) / SecondsInHour);
    const restHoursInSec = restHours * SecondsInHour;
    const restMinutes = Math.floor((diffSeconds - restDaysInSec - restHoursInSec) / SecondsInMin);
    const restMinutesInSec = restMinutes * SecondsInMin;
    const restSeconds = diffSeconds - restDaysInSec - restHoursInSec - restMinutesInSec;

    return {
      days: restDays >= 0 ? restDays : 0,
      hours: restHours >= 0 ? restHours : 0,
      minutes: restMinutes >= 0 ? restMinutes : 0,
      seconds: restSeconds >= 0 ? restSeconds : 0,
    };
  }
}
