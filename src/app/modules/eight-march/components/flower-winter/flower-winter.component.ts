import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as luxon from 'luxon';

import { BaseComponent } from '@shared/base';
import { Constants, Interfaces } from '../../shared';

// 23  24 26 28 2 4 6  8

@Component({
  selector: 'ag-flower-winter',
  templateUrl: './flower-winter.component.html',
  styleUrls: [ './flower-winter.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowerWinterComponent extends BaseComponent implements OnInit {
  @Input()
  public activeFlower: number = 0;

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
    // this.openCardIsVisible = true;
    this.forceRender();
  }
}