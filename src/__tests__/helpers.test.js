import {
  formatNum,
  formatPrice,
  getDiscountedPrice,
  to2dp,
} from 'utils/helpers';

describe('to2dp', () =>
  it('to2dp works', () => expect(to2dp(1000.534)).toBe(1000.53)));

describe('formatNum', () => {
  it('formatNum works for thousands', () =>
    expect(formatNum(908293)).toBe('908.29K'));

  it('formatNum works for millions', () =>
    expect(formatNum(908293083)).toBe('908.29M'));

  it('formatNum works for billions', () =>
    expect(formatNum(9082930834)).toBe('9.08B'));

  it('formatNum works for numbers less than a thousand', () =>
    expect(formatNum(908)).toBe(908));
});

describe('formatPrice', () => {
  it('formatPrice works for thousands', () =>
    expect(formatPrice(908293.234)).toBe('908,293.23'));

  it('formatPrice works for millions', () =>
    expect(formatPrice(908293083.45)).toBe('908,293,083.45'));

  it('formatPrice works for billions', () =>
    expect(formatPrice(9082930834.2341)).toBe('9,082,930,834.23'));

  it('formatPrice works for numbers less than a thousand', () =>
    expect(formatPrice(908)).toBe('908'));
});

describe('getDiscountedPrice', () =>
  it('getDiscountedPrice works', () =>
    expect(getDiscountedPrice(1000.5, 10)).toBe('900.45')));
