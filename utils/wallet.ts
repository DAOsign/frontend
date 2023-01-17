export function areWalletsEqual(
  wallet1: string | null | undefined,
  wallet2: string | null | undefined
): boolean {
  return !!wallet1 && !!wallet2 && wallet1.toLowerCase() === wallet2.toLowerCase();
}
