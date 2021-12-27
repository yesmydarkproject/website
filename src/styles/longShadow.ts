import { RgbaColor, mixColors } from "shared/libs/color";

export function getShadowString(
  color1: RgbaColor,
  color2: RgbaColor,
  length: number,
  xOffsetScale: number,
  yOffsetScale: number
) {
  const totalLength = length;
  let result = `${color1.toString()} 0px 0px`;
  for (let i = length; i > 0; i -= 1) {
    const mixAmount = 100 - (i / totalLength) * 100;
    const mixedColor = mixColors(color1, color2, mixAmount);
    const offsets = `${i * xOffsetScale}px ${i * yOffsetScale}px`;
    result = `${mixedColor} ${offsets}, ${result}`;
  }
  return result;
}
