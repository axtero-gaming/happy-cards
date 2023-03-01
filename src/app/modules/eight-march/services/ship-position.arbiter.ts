import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Enums } from '../shared';

@Injectable()
export class ShipPositionArbiter {
  public sjChange: Subject<void> = new Subject();

  public StarshipSize = 110;
  public ViewPadding = 10;

  #starshipX: number = (window.innerWidth) / 2;
  set starshipX (starshipX: number) {
    this.#starshipX = starshipX;
    this.sjChange.next();
  }
  get starshipX (): number {
    return this.#starshipX;
  }

  #starshipY: number = window.innerHeight - (this.StarshipSize / 2) - 25;
  set starshipY (starshipY: number) {
    this.#starshipY = starshipY;
    this.sjChange.next();
  }
  get starshipY (): number {
    return this.#starshipY;
  }

  #shipView: Enums.ShipView = Enums.ShipView.MainView;
  set shipView (shipView: Enums.ShipView) {
    this.#shipView = shipView;
    this.sjChange.next();
  }
  get shipView (): Enums.ShipView {
    return this.#shipView;
  }

  constructor () {
  }

  /**
   * Returns notification observable.
   *
   * @return {Observable<number>}
   */
  getObserver (): Observable<void> {
    return this.sjChange.asObservable();
  }
}
