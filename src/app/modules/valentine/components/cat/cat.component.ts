import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '@shared/base';

@Component({
  selector: 'ag-cat',
  templateUrl: './cat.component.html',
  styleUrls: [ './cat.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatComponent extends BaseComponent implements OnInit {
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

    setInterval(() => {
      this.activeCat += 1;
      if (this.activeCat > 7) {
        this.activeCat = 0;
      }
      this.forceRender();
    }, 250);
  }
}
