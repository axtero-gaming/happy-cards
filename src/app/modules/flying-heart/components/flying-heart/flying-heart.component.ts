/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '@shared/base';

@Component({
  selector: 'ag-flying-heart',
  templateUrl: './flying-heart.component.html',
  styleUrls: ['./flying-heart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlyingHeartComponent extends BaseComponent {
  constructor(
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }
}
