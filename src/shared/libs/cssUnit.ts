export function emToPixel(str: string): number {
  const em = str.split("em")[0];
  const emNum = Number.parseFloat(em);
  if (Number.isNaN(emNum)) {
    throw new RangeError(`${em} cannot be parsed to number`);
  }
  return emNum * 16;
}
