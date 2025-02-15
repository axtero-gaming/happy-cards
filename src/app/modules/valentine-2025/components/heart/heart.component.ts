import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { BaseComponent } from '@shared/base';

@Component({
  selector: 'ag-heart',
  templateUrl: './heart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeartComponent extends BaseComponent implements OnInit {
  @Input()
  public fill: string;

  constructor(
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit(): void {
    this.forceRender();
  }
}
