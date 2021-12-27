import { RgbaColor, mixColors } from "shared/libs/color";

export function getShadowString(
  color1: RgbaColor,
  color2: RgbaColor,
  length: number,
  xOffsetScale: number,
  yOffsetScale: number
) {
  const totalLength = length;
  const results: string[] = [];
  for (let i = length; i > 0; i -= 1) {
    const mixAmount = 100 - (i / totalLength) * 100;
    const mixedColor = mixColors(color1, color2, mixAmount);
    const x = Math.round(i * xOffsetScale * 10) / 10;
    const y = Math.round(i * yOffsetScale * 10) / 10;
    results.push(`${mixedColor} ${x}px ${y}px`);
  }

  return `${color1.toString()} 0px 0px, ${results.reverse().join(", ")}`;
}
