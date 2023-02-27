import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as luxon from 'luxon';

import { BaseComponent } from '@shared/base';
import { Constants, Interfaces } from '../../shared';

@Component({
  selector: 'ag-space-odyssey',
  templateUrl: './space-odyssey.component.html',
  styleUrls: [ './space-odyssey.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceOdysseyComponent extends BaseComponent implements OnInit {
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
}
