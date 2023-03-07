import {
  ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges,
} from '@angular/core';

import { BaseComponent } from '@shared/base';

// 23  24 26 28 2 4 6  8

@Component({
  selector: 'ag-flower-last-day',
  templateUrl: './flower-last-day.component.html',
  styleUrls: [ './flower-last-day.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowerLastDayComponent extends BaseComponent implements OnInit, OnChanges {
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
}
