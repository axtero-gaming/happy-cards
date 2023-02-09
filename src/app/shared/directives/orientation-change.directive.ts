import { Directive, Output, HostListener, OnInit, EventEmitter } from '@angular/core';

import { BaseDirective } from '../base/base.directive';

@Directive({
  selector: '[agOrientationChange]',
})
export class OrientationChangeDirective extends BaseDirective implements OnInit {
  private windowIsInPortraitMode: boolean;

  @Output('onOrientationChange')
  onOrientationChange: EventEmitter<boolean> = new EventEmitter();

  ngOnInit (
  ): void {
  }

  /**
   * Handles `resize` events to update current orientation mode.
   *
   * @returns {void}
   */
  @HostListener('window:resize')
  onResize (
  ): void {
    this.updateOrientationMode();
  }

  /**
   * Updates orientation mode and emits it to `onOrientationChange`.
   *
   * @return {void}
   */
  updateOrientationMode (): void {
    this.windowIsInPortraitMode = window.innerWidth <= window.innerHeight;

    this.onOrientationChange.emit(this.windowIsInPortraitMode);
  }
}
