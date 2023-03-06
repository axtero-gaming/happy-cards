import {
  ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges,
} from '@angular/core';

import { BaseComponent } from '@shared/base';

// 23  24 26 28 2 4 6  8

@Component({
  selector: 'ag-flower-summer-v3',
  templateUrl: './flower-summer-v3.component.html',
  styleUrls: [ './flower-summer-v3.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowerSummerV3Component extends BaseComponent implements OnInit, OnChanges {
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
