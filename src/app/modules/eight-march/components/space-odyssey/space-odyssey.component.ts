import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import * as luxon from 'luxon';

import { BaseComponent } from '@shared/base';
import { Constants, Enums, Interfaces } from '../../shared';

@Component({
  selector: 'ag-space-odyssey',
  templateUrl: './space-odyssey.component.html',
  styleUrls: [ './space-odyssey.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceOdysseyComponent extends BaseComponent implements OnInit {
  public shipView: Enums.ShipView = Enums.ShipView.MainView;

  public StarshipSize = 110;
  public ViewPadding = 10;
  public starshipX: number = (window.innerWidth) / 2;
  public starshipY: number = window.innerHeight - (this.StarshipSize / 2) - 25;

  public prevTouchX: number;
  public prevTouchY: number;
  public touchStartX: number;
  public touchStartY: number;
  public movementIsEnabled: boolean;

  public shipIDLEMovementTimer: number;

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
    this.shipView = Enums.ShipView.MainView;
    this.render(`starshipStop`, [this.starshipX, this.starshipY, this.shipView]);

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
    if (this.movementIsEnabled === false) {
      return;
    }

    const firstTouch = event.touches[0];
    const diffX = this.prevTouchX - firstTouch.pageX;
    const diffY = this.prevTouchY - firstTouch.pageY;
    this.prevTouchX = firstTouch.pageX;
    this.prevTouchY = firstTouch.pageY;

    if ((this.starshipX - this.StarshipSize / 2 - this.ViewPadding) - diffX < 0
        || (this.starshipX + this.StarshipSize / 2 + this.ViewPadding) - diffX > window.innerWidth
        || (this.starshipY - this.StarshipSize / 2 - this.ViewPadding) - diffY < 0
        || (this.starshipY + this.StarshipSize / 2 + this.ViewPadding) - diffY > window.innerHeight) {
      return;
    }

    this.starshipX -= diffX;
    this.starshipY -= diffY;
    if (diffX > 0) {
      this.shipView = Enums.ShipView.LeftRollView;
    } else if (diffX < 0) {
      this.shipView = Enums.ShipView.RightRollView;
    }

    this.restartShipIDLEMovementTimer();

    this.render(`starshipMovement`, [this.starshipX, this.starshipY, this.shipView]);
  }

  /**
   * Stops IDLE movement timer. This timer returns the ship to initial state.
   *
   * @return {void}
   */
  stopShipIDLEMovementTimer () {
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
  restartShipIDLEMovementTimer () {
    this.stopShipIDLEMovementTimer();

    this.shipIDLEMovementTimer = setTimeout(() => {
      this.shipView = Enums.ShipView.MainView;
      this.forceRender();
    }, 150) as any;
  }
}
