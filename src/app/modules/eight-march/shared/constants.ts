import * as luxon from 'luxon';

import * as Interfaces from "./interfaces";

export const LastSeenDayKey = 'LastSeenDayKey';
export const LastSeenDayCounterKey = 'LastSeenDayCounterKey';

export const StartDay = luxon.DateTime
  .fromISO(`2023-02-23T00:00:00.000Z`, { zone: 'UTC+0' }).setZone('UTC+3', { keepLocalTime: true });
export const EightMarchDayLx = luxon.DateTime
  .fromISO(`2023-03-08T00:00:00.000Z`, { zone: 'UTC+0' }).setZone('UTC+3', { keepLocalTime: true });

export const DayDescriptors: Interfaces.DayDescriptor[] = [
  {
    day: 1,
    title: 'Застывший миг',
    flowerStep: 0,
  },
  {
    day: 2,
    title: 'Начало новой жизни',
    flowerStep: 1,
    snowflakesAreEnabled: true,
    snowflakesIntensity: 50,
  },
  {
    day: 3,
    title: 'Лампа',
    flowerStep: 1,
    winter: true,
    snowflakesAreEnabled: true,
    snowflakesIntensity: 100,
  },
  {
    day: 4,
    title: 'Конц вьюги',
    flowerStep: 2,
    winter: true,
    snowdriftAreShown: true,
    snowflakesAreEnabled: true,
    snowflakesIntensity: 20,
  },
  {
    day: 5,
    title: 'Ясный день',
    flowerStep: 2,
  },
  {
    day: 6,
    title: 'Ясный день',
    flowerStep: 2,
  },
  {
    day: 7,
    title: 'Ясный день',
    flowerStep: 3,
  },
  {
    day: 8,
    title: 'Ясный день',
    flowerStep: 3,
  },
  {
    day: 9,
    title: 'Ясный день',
    flowerStep: 4,
  },
  {
    day: 10,
    title: 'Ясный день',
    flowerStep: 4,
  },
  {
    day: 11,
    title: 'Ясный день',
    flowerStep: 5,
  },
  {
    day: 12,
    title: 'Ясный день',
    flowerStep: 5,
  },
  {
    day: 13,
    title: 'Ясный день',
    flowerStep: 5,
  },
  {
    day: 14,
    title: 'Ясный день',
    flowerStep: 6,
  },
];
