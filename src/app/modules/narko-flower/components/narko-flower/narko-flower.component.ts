/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ChangeDetectorRef, Component, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';

import { BaseComponent } from '@shared/base';

const select = function (el: any) {
  return document.getElementById(el);
};

declare const TimelineMax: any;
declare const TweenMax: any;
declare const Power0: any;

@Component({
  selector: 'ag-narko-flower',
  templateUrl: './narko-flower.component.html',
  styleUrls: ['./narko-flower.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NarkoFlowerComponent extends BaseComponent implements AfterViewChecked {
  constructor(
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  svg = select('svg');
  glasses = select('glasses');
  eyes_happy = select('eyes-happy');
  eyes_crazy = select('eyes-crazy');
  eyes_sexy = select('eyes-sexy');
  mouth_happy = select('mouth-happy');
  mouth_crazy = select('mouth-crazy');
  mouth_cool = select('mouth-cool');
  mouth_sexy = select('mouth-sexy');
  cheeks = select('cheeks');
  stem_1 = select('tige');
  stem_2 = select('tige-1');
  stem_3 = select('tige-2');
  stem_4 = select('tige-3');
  head = select('head');
  face = select('face');
  leaf_group_1 = select('leaf-group-1');
  leaf_group_2 = select('leaf-group-2');
  leaf_group_3 = select('leaf-group-3');
  leaf_group_4 = select('leaf-group-4');
  leaf_stem_1 = select('leaf-stem-1');
  leaf_stem_2 = select('leaf-stem-2');
  leaf_stem_3 = select('leaf-stem-3');
  leaf_stem_4 = select('leaf-stem-4');
  leaf_1 = select('leaf-1');
  leaf_2 = select('leaf-2');
  leaf_3 = select('leaf-3');
  leaf_4 = select('leaf-4');
  btn_happy = select('btn-happy');
  btn_cool = select('btn-cool');
  btn_crazy = select('btn-crazy');
  btn_sexy = select('btn-sexy');

  tlCool = new TimelineMax({ paused: true, repeat: -1 });
  tlHappy = new TimelineMax();
  tlCrazy = new TimelineMax({ paused: true, repeat: -1 });
  tlSexy = new TimelineMax({ paused: true, repeat: -1 });

  ngAfterViewChecked(): void {
    this.svg = select('svg');
    this.glasses = select('glasses');
    this.eyes_happy = select('eyes-happy');
    this.eyes_crazy = select('eyes-crazy');
    this.eyes_sexy = select('eyes-sexy');
    this.mouth_happy = select('mouth-happy');
    this.mouth_crazy = select('mouth-crazy');
    this.mouth_cool = select('mouth-cool');
    this.mouth_sexy = select('mouth-sexy');
    this.cheeks = select('cheeks');
    this.stem_1 = select('tige');
    this.stem_2 = select('tige-1');
    this.stem_3 = select('tige-2');
    this.stem_4 = select('tige-3');
    this.head = select('head');
    this.face = select('face');
    this.leaf_group_1 = select('leaf-group-1');
    this.leaf_group_2 = select('leaf-group-2');
    this.leaf_group_3 = select('leaf-group-3');
    this.leaf_group_4 = select('leaf-group-4');
    this.leaf_stem_1 = select('leaf-stem-1');
    this.leaf_stem_2 = select('leaf-stem-2');
    this.leaf_stem_3 = select('leaf-stem-3');
    this.leaf_stem_4 = select('leaf-stem-4');
    this.leaf_1 = select('leaf-1');
    this.leaf_2 = select('leaf-2');
    this.leaf_3 = select('leaf-3');
    this.leaf_4 = select('leaf-4');
    this.btn_happy = select('btn-happy');
    this.btn_cool = select('btn-cool');
    this.btn_crazy = select('btn-crazy');
    this.btn_sexy = select('btn-sexy');

    this.timelineInit();
    TweenMax.set('svg', { visibility: 'visible' });
    this.forceRender();

    this.tlCrazy
      .to(this.stem_1, 0.3, { scaleY: 0.65, transformOrigin: 'center bottom' }, 'one')
      .to(this.head, 0.3, { y: 60 }, 'one')
      .to(this.face, 0.3, { y: 3 }, 'one')
      .to(this.leaf_group_1, 0.3, { y: 20 }, 'one')
      .to(this.leaf_group_2, 0.3, { y: 45 }, 'one')
      .to(this.leaf_group_3, 0.3, { y: 45 }, 'one')
      .to(this.leaf_group_4, 0.3, { y: 20 }, 'one')
      .to(this.stem_1, 0.3, { scaleY: 1, rotation: -15, transformOrigin: 'center bottom' }, 'two')
      .to(this.head, 0.3, { y: 5, x: -40, rotation: -15, transformOrigin: 'center bottom' }, 'two')
      .to(this.face, 0.3, { x: -2, y: -3 }, 'two')
      .to(this.leaf_group_1, 0.3, { y: 0, x: -7, rotation: -15, transformOrigin: 'right bottom' }, 'two')
      .to(this.leaf_group_2, 0.3, { y: 10, x: -22, rotation: -15, transformOrigin: 'right bottom' }, 'two')
      .to(this.leaf_group_3, 0.3, { y: 10, x: -24, rotation: -15, transformOrigin: 'left bottom' }, 'two')
      .to(this.leaf_group_4, 0.3, { y: 0, x: -7, rotation: -15, transformOrigin: 'left bottom' }, 'two')
      .to(this.stem_1, 0.3, { scaleY: 0.65, rotation: 0, transformOrigin: 'center bottom' }, 'three')
      .to(this.head, 0.3, { y: 60, x: 0, rotation: 0, transformOrigin: 'center bottom' }, 'three')
      .to(this.face, 0.3, { x: 0, y: 3 }, 'three')
      .to(this.leaf_group_1, 0.3, { y: 20, x: 0, rotation: 0, transformOrigin: 'right bottom' }, 'three')
      .to(this.leaf_group_2, 0.3, { y: 45, x: 0, rotation: 0, transformOrigin: 'right bottom' }, 'three')
      .to(this.leaf_group_3, 0.3, { y: 45, x: 0, rotation: 0, transformOrigin: 'left bottom' }, 'three')
      .to(this.leaf_group_4, 0.3, { y: 20, x: 0, rotation: 0, transformOrigin: 'left bottom' }, 'three')
      .to(this.stem_1, 0.3, { scaleY: 1, rotation: 15, transformOrigin: 'center bottom' }, 'four')
      .to(this.head, 0.3, { y: 5, x: 40, rotation: 15, transformOrigin: 'center bottom' }, 'four')
      .to(this.face, 0.3, { x: 2, y: -3 }, 'four')
      .to(this.leaf_group_1, 0.3, { y: 0, x: 7, rotation: 15, transformOrigin: 'right bottom' }, 'four')
      .to(this.leaf_group_2, 0.3, { y: 0, x: 24, rotation: 15, transformOrigin: 'right bottom' }, 'four')
      .to(this.leaf_group_3, 0.3, { y: 0, x: 28, rotation: 15, transformOrigin: 'left bottom' }, 'four')
      .to(this.leaf_group_4, 0.3, { y: 0, x: 12, rotation: 15, transformOrigin: 'left bottom' }, 'four')
      .to(this.stem_1, 0.3, { scaleY: 0.65, rotation: 0, transformOrigin: 'center bottom' }, 'five')
      .to(this.head, 0.3, { y: 60, x: 0, rotation: 0, transformOrigin: 'center bottom' }, 'five')
      .to(this.face, 0.3, { x: 0, y: 3 }, 'five')
      .to(this.leaf_group_1, 0.3, { y: 20, x: 0, rotation: 0, transformOrigin: 'right bottom' }, 'five')
      .to(this.leaf_group_2, 0.3, { y: 45, x: 0, rotation: 0, transformOrigin: 'right bottom' }, 'five')
      .to(this.leaf_group_3, 0.3, { y: 45, x: 0, rotation: 0, transformOrigin: 'left bottom' }, 'five')
      .to(this.leaf_group_4, 0.3, { y: 20, x: 0, rotation: 0, transformOrigin: 'left bottom' }, 'five')
      .to(this.stem_1, 0.3, { scaleY: 1, rotation: 0, transformOrigin: 'center bottom' }, 'six')
      .to(this.head, 0.3, { y: 0, x: 0, rotation: 0, transformOrigin: 'center bottom' }, 'six')
      .to(this.face, 0.3, { x: 0, y: 0 }, 'six')
      .to(this.leaf_group_1, 0.3, { y: 0, x: 0, rotation: 0, transformOrigin: 'right bottom' }, 'six')
      .to(this.leaf_group_2, 0.3, { y: 0, x: 0, rotation: 0, transformOrigin: 'right bottom' }, 'six')
      .to(this.leaf_group_3, 0.3, { y: 0, x: 0, rotation: 0, transformOrigin: 'left bottom' }, 'six')
      .to(this.leaf_group_4, 0.3, { y: 0, x: 0, rotation: 0, transformOrigin: 'left bottom' }, 'six');
    this.tlCrazy.timeScale(1.6);

    this.tlCool
      .to(this.head, 0.3, { x: 3, repeat: -1, yoyo: true }, 'two')
      .to(this.leaf_group_1, 0.3, { rotation: -1, transformOrigin: 'right bottom', repeat: -1, yoyo: true }, 'two')
      .to(this.leaf_group_2, 0.3, { rotation: -1, transformOrigin: 'right bottom', repeat: -1, yoyo: true }, 'two')
      .to(this.leaf_group_3, 0.3, { rotation: 1, transformOrigin: 'left bottom', repeat: -1, yoyo: true }, 'two')
      .to(this.leaf_group_4, 0.3, { rotation: 1, transformOrigin: 'left bottom', repeat: -1, yoyo: true }, 'two');

    this.tlHappy
      .to(this.leaf_stem_1, 0.3, { attr: { x2: 250, y2: 340 }, transformOrigin: '50% 50%' }, 'one')
      .to(this.leaf_1, 0.3, { x: -15, y: -7 }, 'one')
      .to(this.leaf_stem_2, 0.3, { attr: { x2: 240, y2: 267 }, transformOrigin: '50% 50%' }, 'one')
      .to(this.leaf_2, 0.3, { x: -15, y: -7 }, 'one')
      .add(this.happy2());

    this.tlHappy.timeScale(4);

    this.tlSexy
      .to(this.stem_1, 0.3, { morphSVG: this.stem_2, ease: Power0.easeNone }, 'one')
      .to(
        this.head,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: -15,
          transformOrigin: 'center bottom',
          ease: Power0.easeNone,
        },
        'one',
      )
      .to(
        this.leaf_group_1,
        0.3,
        {
          y: 0,
          x: -18,
          rotation: -20,
          transformOrigin: 'right bottom',
          ease: Power0.easeNone,
        },
        'one',
      )
      .to(
        this.leaf_group_2,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 15,
          transformOrigin: 'right bottom',
          ease: Power0.easeNone,
        },
        'one',
      )
      .to(
        this.leaf_group_3,
        0.3,
        {
          y: 0,
          x: 8,
          rotation: 30,
          transformOrigin: 'left bottom',
          ease: Power0.easeNone,
        },
        'one',
      )
      .to(
        this.leaf_group_4,
        0.3,
        {
          y: 0,
          x: -22,
          rotation: -5,
          transformOrigin: 'left bottom',
          ease: Power0.easeNone,
        },
        'one',
      )
      .to(this.stem_1, 0.3, { morphSVG: this.stem_1, ease: Power0.easeNone }, 'two')
      .to(
        this.head,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'center bottom',
          ease: Power0.easeNone,
        },
        'two',
      )
      .to(
        this.leaf_group_1,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'right bottom',
          ease: Power0.easeNone,
        },
        'two',
      )
      .to(
        this.leaf_group_2,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'right bottom',
          ease: Power0.easeNone,
        },
        'two',
      )
      .to(
        this.leaf_group_3,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'left bottom',
          ease: Power0.easeNone,
        },
        'two',
      )
      .to(
        this.leaf_group_4,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'left bottom',
          ease: Power0.easeNone,
        },
        'two',
      )
      .to(this.stem_1, 0.3, { morphSVG: this.stem_3, ease: Power0.easeNone }, 'three')
      .to(
        this.head,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 15,
          transformOrigin: 'center bottom',
          ease: Power0.easeNone,
        },
        'three',
      )
      .to(
        this.leaf_group_1,
        0.3,
        {
          y: 0,
          x: 16,
          rotation: 10,
          transformOrigin: 'right bottom',
          ease: Power0.easeNone,
        },
        'three',
      )
      .to(
        this.leaf_group_2,
        0.3,
        {
          y: 0,
          x: -4,
          rotation: -30,
          transformOrigin: 'right bottom',
          ease: Power0.easeNone,
        },
        'three',
      )
      .to(
        this.leaf_group_3,
        0.3,
        {
          y: 0,
          x: -10,
          rotation: -5,
          transformOrigin: 'left bottom',
          ease: Power0.easeNone,
        },
        'three',
      )
      .to(
        this.leaf_group_4,
        0.3,
        {
          y: 0,
          x: 14,
          rotation: 20,
          transformOrigin: 'left bottom',
          ease: Power0.easeNone,
        },
        'three',
      )
      .to(this.stem_1, 0.3, { morphSVG: this.stem_1, ease: Power0.easeNone }, 'four')
      .to(
        this.head,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'center bottom',
          ease: Power0.easeNone,
        },
        'four',
      )
      .to(
        this.leaf_group_1,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'right bottom',
          ease: Power0.easeNone,
        },
        'four',
      )
      .to(
        this.leaf_group_2,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'right bottom',
          ease: Power0.easeNone,
        },
        'four',
      )
      .to(
        this.leaf_group_3,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'left bottom',
          ease: Power0.easeNone,
        },
        'four',
      )
      .to(
        this.leaf_group_4,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'left bottom',
          ease: Power0.easeNone,
        },
        'four',
      );
    this.tlSexy.timeScale(0.6);
  }

  startHappy() {
    this.glasses.style.display = 'none';
    this.eyes_happy.style.display = 'block';
    this.eyes_crazy.style.display = 'none';
    this.eyes_sexy.style.display = 'none';
    this.mouth_happy.style.display = 'block';
    this.mouth_crazy.style.display = 'none';
    this.mouth_cool.style.display = 'none';
    this.mouth_sexy.style.display = 'none';
    this.cheeks.style.display = 'block';
    this.tlCrazy.stop();
    this.tlCool.stop();
    this.tlSexy.stop();
    this.timelineInit();
    this.tlHappy.play();
  }
  startCool() {
    this.glasses.style.display = 'block';
    this.eyes_happy.style.display = 'none';
    this.eyes_crazy.style.display = 'none';
    this.eyes_sexy.style.display = 'none';
    this.mouth_happy.style.display = 'none';
    this.mouth_crazy.style.display = 'none';
    this.mouth_cool.style.display = 'block';
    this.mouth_sexy.style.display = 'none';
    this.cheeks.style.display = 'none';
    this.tlHappy.stop();
    this.tlCrazy.stop();
    this.tlSexy.stop();
    this.timelineInit();
    this.tlCool.play();
  }
  startCrazy() {
    this.glasses.style.display = 'none';
    this.eyes_happy.style.display = 'none';
    this.eyes_sexy.style.display = 'none';
    this.eyes_crazy.style.display = 'block';
    this.mouth_happy.style.display = 'none';
    this.mouth_crazy.style.display = 'block';
    this.mouth_cool.style.display = 'none';
    this.mouth_sexy.style.display = 'none';
    this.cheeks.style.display = 'none';
    this.tlCool.stop();
    this.tlHappy.stop();
    this.tlSexy.stop();
    this.timelineInit();
    this.tlCrazy.play();
  }

  startWoman() {
    this.glasses.style.display = 'none';
    this.eyes_happy.style.display = 'none';
    this.eyes_crazy.style.display = 'none';
    this.eyes_sexy.style.display = 'block';
    this.mouth_happy.style.display = 'none';
    this.mouth_crazy.style.display = 'none';
    this.mouth_cool.style.display = 'none';
    this.mouth_sexy.style.display = 'block';
    this.cheeks.style.display = 'block';
    this.tlCool.stop();
    this.tlHappy.stop();
    this.tlCrazy.stop();
    this.timelineInit();
    this.tlSexy.play();
  }

  timelineInit() {
    TweenMax.set(this.stem_1, {
      scaleY: 1,
      rotation: 0,
      transformOrigin: 'center bottom',
    });
    TweenMax.set(this.head, {
      y: 0,
      x: 0,
      rotation: 0,
      transformOrigin: 'center bottom',
    });
    TweenMax.set(this.leaf_group_1, {
      y: 0,
      x: 0,
      rotation: 0,
      transformOrigin: 'right bottom',
    });
    TweenMax.set(this.leaf_group_2, {
      y: 0,
      x: 0,
      rotation: 0,
      transformOrigin: 'right bottom',
    });
    TweenMax.set(this.leaf_group_3, {
      y: 0,
      x: 0,
      rotation: 0,
      transformOrigin: 'left bottom',
    });
    TweenMax.set(this.leaf_group_4, {
      y: 0,
      x: 0,
      rotation: 0,
      transformOrigin: 'left bottom',
    });
    TweenMax.set(this.head, { y: 0 });
    TweenMax.set(this.face, { x: 0, y: 0 });
    TweenMax.set(this.leaf_stem_1, { attr: { x2: 289, y2: 360 } });
    TweenMax.set(this.leaf_stem_2, { attr: { x2: 287.2, y2: 287 } });
    TweenMax.set(this.leaf_stem_3, { attr: { x2: 313.3, y2: 278.1 } });
    TweenMax.set(this.leaf_stem_4, { attr: { x2: 312.6, y2: 351.2 } });
    TweenMax.set(this.leaf_1, { x: 0, y: 0 });
    TweenMax.set(this.leaf_2, { x: 0, y: 0 });
    TweenMax.set(this.leaf_3, { x: 0, y: 0 });
    TweenMax.set(this.leaf_4, { x: 0, y: 0 });
    TweenMax.set(this.stem_1, {
      attr: { d: 'M300.8,398.4c0,0,2.1-60.3,1.7-80.3c-0.5-23-6.2-92-6.2-92' },
    });
  }

  happy2() {
    const tlHappy2 = new TimelineMax({ repeat: -1 });
    tlHappy2
      .to(this.leaf_stem_3, 0.3, { attr: { x2: 335, y2: 268 }, transformOrigin: '50% 50%' }, 'two+=0.5')
      .to(this.leaf_3, 0.3, { x: 15, y: -7 }, 'two+=0.5')
      .to(this.leaf_stem_4, 0.3, { attr: { x2: 340, y2: 337 }, transformOrigin: '50% 50%' }, 'two+=0.5')
      .to(this.leaf_4, 0.3, { x: 15, y: -7 }, 'two+=0.5')
      .to(this.leaf_stem_1, 0.3, { attr: { x2: 289, y2: 360 }, transformOrigin: '50% 50%' }, 'two+=0.5')
      .to(this.leaf_1, 0.3, { x: -2, y: 0 }, 'two+=0.5')
      .to(this.leaf_stem_2, 0.3, { attr: { x2: 287.2, y2: 287 }, transformOrigin: '50% 50%' }, 'two+=0.5')
      .to(this.leaf_2, 0.3, { x: -5, y: 0 }, 'two+=0.5')
      .to(
        this.head,
        0.3,
        {
          y: 0,
          x: 5,
          rotation: 5,
          transformOrigin: 'center bottom',
          ease: Power0.easeNone,
        },
        'two+=0.5',
      )
      .to(this.stem_1, 0.3, { x: 2, morphSVG: this.stem_4, ease: Power0.easeNone }, 'two+=0.5')
      .to(this.leaf_stem_3, 0.3, { attr: { x2: 313.3, y2: 278.1 }, transformOrigin: '50% 50%' }, 'three+=0.5')
      .to(this.leaf_3, 0.3, { x: 0, y: 0 }, 'three+=0.5')
      .to(this.leaf_stem_4, 0.3, { attr: { x2: 312.6, y2: 351.2 }, transformOrigin: '50% 50%' }, 'three+=0.5')
      .to(this.leaf_4, 0.3, { x: 0, y: 0 }, 'three+=0.5')
      .to(this.leaf_stem_1, 0.3, { attr: { x2: 250, y2: 340 }, transformOrigin: '50% 50%' }, 'three+=0.5')
      .to(this.leaf_1, 0.3, { x: -15, y: -7 }, 'three+=0.5')
      .to(this.leaf_stem_2, 0.3, { attr: { x2: 235, y2: 265 }, transformOrigin: '50% 50%' }, 'three+=0.5')
      .to(this.leaf_2, 0.3, { x: -15, y: -7 }, 'three+=0.5')
      .to(
        this.head,
        0.3,
        {
          y: 0,
          x: 0,
          rotation: 0,
          transformOrigin: 'center bottom',
          ease: Power0.easeNone,
        },
        'three+=0.5',
      )
      .to(this.stem_1, 0.3, { x: 0, morphSVG: this.stem_1, ease: Power0.easeNone }, 'three+=0.5');
    return tlHappy2;
  }

  cardIsVisible = false;
  /**
   * Hides the timer's view and opens card.
   *
   * @return {void}
   */
  openCard(): void {
    this.cardIsVisible = true;
    this.forceRender();
  }
}
