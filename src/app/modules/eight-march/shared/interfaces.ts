import * as Enums from './enums';

export interface DayDescriptor {
  day?: number;
  title: string;
  flowerStep?: number;
  winter?: boolean;
  spaceOdysseyGame?: boolean;
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
