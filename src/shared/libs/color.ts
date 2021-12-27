// Ported from dart-sass
// https://github.com/sass/dart-sass/blob/a32000ea9af30ad443a9e1847f09ec1070d82f36/lib/src/functions/color.dart
//
// Copyright 2019 Google Inc. Use of this source code is governed by an
// MIT-style license that can be found in the LICENSE file or at
// https://opensource.org/licenses/MIT.

import { fuzzyRound } from "./math";

export class RgbaColor {
  constructor(
    public red: number,
    public green: number,
    public blue: number,
    public alpha: number
  ) {}

  toString() {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  }
}

export function mixColors(
  color1: RgbaColor,
  color2: RgbaColor,
  weight: number
) {
  const weightScale = weight / 100;
  const normalizedWeight = weightScale * 2 - 1;
  const alphaDistance = color1.alpha - color2.alpha;

  const combinedWeight1 =
    normalizedWeight * alphaDistance === 0
      ? normalizedWeight
      : (normalizedWeight + alphaDistance) /
        (1 + normalizedWeight + alphaDistance);

  const weight1 = (combinedWeight1 + 1) / 2;
  const weight2 = 1 - weight1;

  return new RgbaColor(
    fuzzyRound(color1.red * weight1 + color2.red * weight2),
    fuzzyRound(color1.green * weight1 + color2.green * weight2),
    fuzzyRound(color1.blue * weight1 + color2.blue * weight2),
    Math.round(
      (color1.alpha * weightScale + color2.alpha * (1 - weightScale)) * 10000
    ) / 10000
  );
}
