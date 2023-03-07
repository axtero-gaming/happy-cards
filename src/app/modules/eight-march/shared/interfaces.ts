import * as Enums from './enums';

export interface DayDescriptor {
  day?: number;
  title: string;
  flowerStep?: number;
  spaceOdysseyGame?: boolean;
  lightTopbar?: boolean;
  view: Enums.DayView;
  snowView?: SnowView;
}

export interface AsteroidViewDescriptor {
  view: Enums.AsteroidView;
  width: number;
  height: number;
}

export interface SnowView {
  snowdriftAreShown?: boolean;
  snowflakesAreEnabled?: boolean;
  snowflakesIntensity?: number;
  ufoAreShown?: boolean;
}
