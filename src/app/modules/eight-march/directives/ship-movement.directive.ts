import { Directive, HostListener } from '@angular/core';

import { ShipPositionArbiter } from '../services/ship-position.arbiter';
import { Enums } from '../shared';

@Directive({
  selector: '[agShipMovement]',
})
export class ShipMovementDirective {
  public StarshipSize = 110;
  public ViewPadding = 10;

  public prevTouchX: number;
  public prevTouchY: number;
  public touchStartX: number;
  public touchStartY: number;
  public movementIsEnabled: boolean;

  public shipIDLEMovementTimer: number;

  constructor (
    private shipPositionArbiter: ShipPositionArbiter,
  ) {
  }

  /**
   * Handles `touchstart` events.
   *
   * @param  {TouchEvent} event
   * @return {void}
   */
   @HostListener('document:touchstart', [ '$event' ])
   onTouchStart (event: TouchEvent): void {
    const firstTouch = event.changedTouches[0];
    this.prevTouchX = firstTouch.pageX;
    this.prevTouchY = firstTouch.pageY;
    this.touchStartX = this.prevTouchX;
    this.touchStartY = this.prevTouchY;

    this.movementIsEnabled = true;
  }

  /**
  * Handles `touchend` events.
  *
  * @param  {TouchEvent} event
  * @return {void}
  */
  @HostListener('document:touchend', [ '$event' ])
  async onTouchEnd (event: TouchEvent): Promise<void> {
    const firstTouch = event.changedTouches[0];
    this.shipPositionArbiter.shipView = Enums.ShipView.MainView;

    this.stopShipIDLEMovementTimer();
    this.movementIsEnabled = false;

    // FYI[FLOW]: Touch logic can interact only w/ game area.
    const targetEl = firstTouch.target as HTMLElement;
    if (targetEl?.className !== 'game-area') {
      return;
    }

    const maxOffset = 5;
    if (Math.abs(this.touchStartX - firstTouch.pageX) < maxOffset
        && Math.abs(this.touchStartY - firstTouch.pageY) < maxOffset) {
      // const areaOffset = this.gameRenderEngine.getGameViewOffset();
      // const clickX = this.touchStartX - areaOffset.x;
      // const clickY = this.touchStartY - areaOffset.y;
      // event.preventDefault();
      // await this.gameAreaInteractionEngine.onClickGameArea({
      //   x: clickX,
      //   y: clickY,
      // });
      return;
    }
  }

  /**
  * Handles `touchmove` events.
  *
  * @param  {TouchEvent} event
  * @return {void}
  */
  @HostListener('document:touchmove', [ '$event' ])
  onTouchMove (event: TouchEvent): void {
    event.preventDefault();
    if (this.movementIsEnabled === false) {
      return;
    }

    const firstTouch = event.touches[0];
    const diffX = this.prevTouchX - firstTouch.pageX;
    const diffY = this.prevTouchY - firstTouch.pageY;
    this.prevTouchX = firstTouch.pageX;
    this.prevTouchY = firstTouch.pageY;

    const starshipX = this.shipPositionArbiter.starshipX;
    const starshipY = this.shipPositionArbiter.starshipY;
    if ((starshipX - this.StarshipSize / 2 - this.ViewPadding) - diffX < 0
        || (starshipX + this.StarshipSize / 2 + this.ViewPadding) - diffX > window.innerWidth
        || (starshipY - this.StarshipSize) - diffY < 0
        || (starshipY + this.StarshipSize / 2) - diffY > window.innerHeight) {
      return;
    }

    this.shipPositionArbiter.starshipX -= diffX;
    this.shipPositionArbiter.starshipY -= diffY;
    if (diffX > 0) {
      this.shipPositionArbiter.shipView = Enums.ShipView.LeftRollView;
    } else if (diffX < 0) {
      this.shipPositionArbiter.shipView = Enums.ShipView.RightRollView;
    }

    this.restartShipIDLEMovementTimer();
  }

  /**
  * Stops IDLE movement timer. This timer returns the ship to initial state.
  *
  * @return {void}
  */
  stopShipIDLEMovementTimer (): void {
    if (_.isNil(this.shipIDLEMovementTimer) === false) {
      clearTimeout(this.shipIDLEMovementTimer);
      this.shipIDLEMovementTimer = null;
    }
  }

  /**
  * Restart IDLE movement timer. This timer returns the ship to initial state.
  *
  * @return {void}
  */
  restartShipIDLEMovementTimer (): void {
    this.stopShipIDLEMovementTimer();

    this.shipIDLEMovementTimer = setTimeout(() => {
      this.shipPositionArbiter.shipView = Enums.ShipView.MainView;
    }, 150) as any;
  }
}
