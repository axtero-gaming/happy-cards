import * as luxon from 'luxon';

export * from './constants/word.constants';

export const MinWordSize = 3;
export const MaxWordSize = 7;

export const ValentinesDayLx = luxon.DateTime
  .fromISO(`2023-02-14T00:00:00.000Z`, { zone: 'UTC+0' }).setZone('UTC+3', { keepLocalTime: true });
