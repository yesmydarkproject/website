// Ported from dart-sass
// https://github.com/sass/dart-sass/blob/a32000ea9af30ad443a9e1847f09ec1070d82f36/lib/src/util/number.dart
//
// Copyright 2016 Google Inc. Use of this source code is governed by an
// MIT-style license that can be found in the LICENSE file or at
// https://opensource.org/licenses/MIT.

const epsilon = 10 ** -11;

export function fuzzyEquals(num1: number, num2: number) {
  return Math.abs(num1 - num2) < epsilon;
}

export function fuzzyLessThan(num1: number, num2: number) {
  return num1 < num2 && !fuzzyEquals(num1, num2);
}

export function fuzzyLessThanOrEquals(num1: number, num2: number) {
  return num1 < num2 || fuzzyEquals(num1, num2);
}

export function fuzzyRound(num: number) {
  if (num > 0) {
    return fuzzyLessThan(num % 1, 0.5) ? Math.floor(num) : Math.ceil(num);
  }
  return fuzzyLessThanOrEquals(num % 1, 0.5) ? Math.floor(num) : Math.ceil(num);
}
