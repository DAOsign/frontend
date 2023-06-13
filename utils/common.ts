/**
 * Returns whether the given object contains no keys
 */
export function isEmpty(obj: any): boolean {
  return Object.keys(obj)?.length === 0;
}

/**
 * Can be used to wait specified time
 */
export function sleep(millisecondsToSleep: number): Promise<boolean> {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(true);
    }, millisecondsToSleep)
  );
}

export const numberToHex = (x: number) => `0x${x.toString(16)}`;
