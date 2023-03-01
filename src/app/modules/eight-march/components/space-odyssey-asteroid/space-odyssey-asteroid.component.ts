import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as luxon from 'luxon';

import { BaseComponent } from '@shared/base';
import { Constants, Enums, Interfaces } from '../../shared';

@Component({
  selector: 'ag-space-odyssey-asteroid',
  templateUrl: './space-odyssey-asteroid.component.html',
  styleUrls: [ './space-odyssey-asteroid.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceOdysseyAsteroidComponent extends BaseComponent implements OnInit {
  public AsteroidView = Enums.ShipView;

  public asteroidView: Enums.ShipView = Enums.ShipView.MainView;
  @Input(`shipView`)
  set inAsteroidView (shipView: Enums.ShipView) {
    if (_.isNil(shipView) === true) {
      return;
    }
    this.asteroidView = shipView;
    this.render(`asteroidView`, [ shipView ]);
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