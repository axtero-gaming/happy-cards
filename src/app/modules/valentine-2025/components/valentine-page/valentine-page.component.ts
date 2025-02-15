import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '@shared/base';

interface Preset {
  heart: string;
  bg: string;
}

const PRESETS: Preset[] = [
  { heart: `#ff414d`, bg: `#fa9fed` },
  { heart: `#347aff`, bg: `#fa9fed` },
  { heart: `#ca8fff`, bg: `#ffe264` },
  { heart: `#ff414d`, bg: `#ffe264` },
  { heart: `#00deb7`, bg: `#347aff` },
  { heart: `#347aff`, bg: `#00deb7` },
  { heart: `#fe82ea`, bg: `#347aff` },
];

const HEART_IMAGES = [
  ...new Array(6).fill(0).map((value, index) => {
    return `heart_${index + 1}.png`;
  }),
];
const STAR_IMAGES = [
  ...new Array(5).fill(0).map((value, index) => {
    return `star_${index + 1}.png`;
  }),
];
const RAINBOW_IMAGE = `rainbow.png`;
const SUN_IMAGE = `sun.png`;
const PEN_IMAGE = `pen.png`;
const BLISTER_IMAGE = `blister.png`;
export const ERASE_IMAGE = `erase.png`;
const FILL_IMAGE = `fill.png`;
const FLOWER_IMAGE = `flower.png`;
const LIGHT_IMAGE = `bz.png`;
const CROWN_IMAGE = `crown.png`;

export interface CardItem {
  x: number;
  y: number;
  img: string;
  angle?: number;
  size?: number;
  animationDuration?: string;
}

@Component({
  selector: 'ag-valentine-page',
  templateUrl: './valentine-page.component.html',
  styleUrls: ['./valentine-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValentinePageComponent extends BaseComponent implements OnInit {
  activePreset: Preset;
  activePresetIndex: number;

  activeFaceIndex: number;

  items: CardItem[] = [
    { x: -180, y: -50, img: RAINBOW_IMAGE, angle: 90 },
    { x: 140, y: -120, img: SUN_IMAGE },
    { x: 120, y: 30, img: LIGHT_IMAGE, angle: 90 },
    { x: -150, y: -250, img: CROWN_IMAGE, angle: 10 },
    { x: 60, y: -350, img: FLOWER_IMAGE, angle: -20 },
    { x: -40, y: -430, img: STAR_IMAGES[1], animationDuration: `2s` },
    { x: -260, y: -430, img: PEN_IMAGE, size: 50, angle: 180 },
    { x: 180, y: -470, img: BLISTER_IMAGE, size: 60, angle: -10 },
    { x: -200, y: -700, img: HEART_IMAGES[4], angle: -90 },
    { x: 50, y: -700, img: STAR_IMAGES[3], angle: 40, animationDuration: `2s` },
    { x: 140, y: -850, img: SUN_IMAGE },
    { x: -130, y: -820, img: FILL_IMAGE },
  ];

  constructor(
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit(): void {
    this.activeFaceIndex = 2;

    this.activePresetIndex = 0;
    this.activePreset = PRESETS[0];
    this.forceRender();
  }

  /**
   * Hides the timer's view and opens card.
   *
   * @return {void}
   */
  changePreset(): void {
    if (this.activePresetIndex + 1 >= PRESETS.length) {
      this.activePresetIndex = 0;
    } else {
      this.activePresetIndex += 1;
    }

    this.activePreset = PRESETS[this.activePresetIndex];
    this.forceRender();
  }

  /**
   * Hides the timer's view and opens card.
   *
   * @return {void}
   */
  changeHeart(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.activeFaceIndex + 1 >= 6) {
      this.activeFaceIndex = 0;
    } else {
      this.activeFaceIndex += 1;
    }

    console.log(this.activeFaceIndex);
    this.forceRender();
  }

  get faceURL() {
    return `assets/images/valentine-2025/face_${this.activeFaceIndex + 1}.png`;
  }

  getItemURL(cardItems: CardItem) {
    return `assets/images/valentine-2025/${cardItems.img}`;
  }

  getItemRotate(cardItems: CardItem) {
    return `rotate(${cardItems.angle}deg)`;
  }

  getItemTransform(cardItems: CardItem) {
    return `translate(${cardItems.x}px, ${cardItems.y}px)`;
  }
}
