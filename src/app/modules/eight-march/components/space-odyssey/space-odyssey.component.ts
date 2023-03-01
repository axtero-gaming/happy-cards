import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '@shared/base';
import { ShipPositionArbiter } from '../../services/ship-position.arbiter';
import { Enums } from '../../shared';

@Component({
  selector: 'ag-space-odyssey',
  templateUrl: './space-odyssey.component.html',
  styleUrls: [ './space-odyssey.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceOdysseyComponent extends BaseComponent implements OnInit {
  public shipView: Enums.ShipView = Enums.ShipView.MainView;
  public AsteroidView = Enums.AsteroidView;

  public StarshipSize = this.shipPositionArbiter.StarshipSize;
  public starshipX: number;
  public starshipY: number;

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
    // Services
    private shipPositionArbiter: ShipPositionArbiter,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    this.forceRender();

    const shipPositionArbiter$ = this.shipPositionArbiter.getObserver()
      .subscribe(() => {
        this.updateShipView();
      });
    this.subscribe(shipPositionArbiter$);

    this.updateShipView();
  }

  updateShipView (): void {
    this.starshipX = this.shipPositionArbiter.starshipX;
    this.starshipY = this.shipPositionArbiter.starshipY;
    this.shipView = this.shipPositionArbiter.shipView;
    this.render(`shipView`, [ this.starshipX, this.starshipY, this.shipView ]);
  }
}
