import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '@shared/base';

@Component({
  selector: 'ag-love',
  templateUrl: './love.component.html',
  styleUrls: [ './love.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoveComponent extends BaseComponent implements OnInit {
  public activeCat: number = 0;

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
