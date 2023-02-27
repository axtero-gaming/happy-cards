import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as luxon from 'luxon';

import { BaseComponent } from '@shared/base';
import { Constants, Enums, Interfaces } from '../../shared';

@Component({
  selector: 'ag-space-odyssey-user-ship',
  templateUrl: './space-odyssey-user-ship.component.html',
  styleUrls: [ './space-odyssey-user-ship.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceOdysseyUserShipComponent extends BaseComponent implements OnInit {
  public ShipView = Enums.ShipView;

  public shipView: Enums.ShipView = Enums.ShipView.MainView;
  @Input(`shipView`)
  set inShipView (shipView: Enums.ShipView) {
    if (_.isNil(shipView) === true) {
      return;
    }
    this.shipView = shipView;
    this.render(`shipView`, [ shipView ]);
  }

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
