export interface DayDescriptor {
  day?: number;
  title: string;
  flowerStep?: number;
  winter?: boolean;
  spaceOdysseyGame?: boolean;
  snowView?: SnowView;
}

export interface SnowView {
  snowdriftAreShown?: boolean;
  snowflakesAreEnabled?: boolean;
  snowflakesIntensity?: number;
  ufoAreShown?: boolean;
}
