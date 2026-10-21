/** Helpers shared by components. `tx` is kept so the code matches the full multilingual version. */
export function useTx() {
  const tx = <T>(obj: T): T => obj
  const chf = (n: number) =>
    'CHF ' + new Intl.NumberFormat('de-CH', { maximumFractionDigits: 0 }).format(n)
  return { tx, chf }
}
