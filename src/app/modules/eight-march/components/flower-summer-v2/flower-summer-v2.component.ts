import {
  ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges,
} from '@angular/core';

import { BaseComponent } from '@shared/base';

// 23  24 26 28 2 4 6  8

@Component({
  selector: 'ag-flower-summer-v2',
  templateUrl: './flower-summer-v2.component.html',
  styleUrls: [ './flower-summer-v2.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowerSummerV2Component extends BaseComponent implements OnInit, OnChanges {
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

  ngOnChanges (changes: SimpleChanges): void {
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
