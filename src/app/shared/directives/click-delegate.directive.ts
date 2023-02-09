import { Directive, Input, Output, HostListener, EventEmitter, ElementRef } from '@angular/core';

import { DOMHelper } from '@core/dom.helper';

import * as Interfaces from '../interfaces';

@Directive({
  selector: '[agClickDelegate]',
})
export class ClickDelegateDirective {
  private startEl: HTMLElement | SVGElement;

  /**
   * FYI[WORKFLOW]: User can click on element and move cursore to another element. When he/she can click
   * on another element and stop click on first element. If we don't save mousedown date, directive will
   * trigger `mousedown` listener because there is a start element.
   */
  private lastMousedownDate: Date;
  static lastMousedownDate: Date;

  @Output('dClick')
  dClickEE: EventEmitter<Interfaces.ClickDelegateEvent> = new EventEmitter();

  @Input('allowedSelectors')
  set inAllowedSelectors (value: string[]) {
    this.allowedSelectors = _.isEmpty(value)
      ? [] : value;
  }
  /**
   * We use this properties as keys to search elements (clicked or parents elements).
   */
  private allowedSelectors: string[] = [];

  @Input('forbiddenSelectors')
  set inForbiddenSelectors (value: string[]) {
    this.forbiddenSelectors = _.isEmpty(value)
      ? [] : value;
  }
  /**
   * We use this properties as keys to search elements (clicked or parents elements).
   */
  private forbiddenSelectors: string[] = [];

  constructor (
    private elementRef: ElementRef,
    // Services
    private domHelper: DOMHelper,
  ) {
  }

  @HostListener('mousedown', [ '$event' ])
  onMousedown (
    event: MouseEvent,
  ): void {
    this.startEl = event?.target as HTMLElement | SVGElement;

    this.lastMousedownDate = new Date();
    ClickDelegateDirective.lastMousedownDate = this.lastMousedownDate;
  }

  /**
   * Handles `click` events on the direcitve element.
   * - throws an error if the mouse event is null (system error)
   * - throws an error if the list of tag selectors are empty
   * - finds an element by a tag selector.
   * - extracts `id` and `type` dataset values.
   * - emits a click delegate event.
   *
   * @param   {MouseEvent} event
   * @returns {void}
   */
  @HostListener('mouseup', [ '$event' ])
  onMouseup (
    event: MouseEvent,
  ): void {
    const startEl = this.startEl;
    this.startEl = null;

    if (this.lastMousedownDate !== ClickDelegateDirective.lastMousedownDate) {
      return;
    }

    if (_.isNil(event) === true || _.isNil(event.target) === true) {
      return;
    }

    if (_.isEmpty(this.allowedSelectors) === true) {
      throw new Error('ClickDelegateDirective.onMouseup: Tag selectors are required!');
    }

    const targetEl = event.target as HTMLElement | SVGElement;
    const currentEl = this.elementRef.nativeElement as HTMLElement | SVGElement;
    if (this.domHelper.isElementInElementWithLimit(targetEl, startEl, currentEl) === false) {
      return;
    }

    const selectedElementIsForbidden = _.some(this.forbiddenSelectors, (tagSelector) => {
      const forbiddenEl = this.domHelper.closestToLimit(
        targetEl, tagSelector, currentEl,
      );
      return _.isNil(forbiddenEl) === false;
    });

    if (selectedElementIsForbidden === true) {
      return;
    }

    let el: HTMLElement | SVGElement;
    const elTagSelector = _.find(this.allowedSelectors, (tagSelector) => {
      el = this.domHelper.closestToLimit(
        targetEl, tagSelector, currentEl,
      );
      return _.isNil(el) === false;
    });

    if (_.isNil(elTagSelector) === true) {
      return;
    }

    const id: string = el?.dataset?.id;
    const type: string = el?.dataset?.type;

    this.dClickEE.emit({
      id: id,
      type: type,
      dataset: el?.dataset,
      selector: elTagSelector,
      event: event,
    });
  }
}
