/**
 * Simulates a successful form handoff (no backend yet).
 * Replace with fetch('/api/...') when you add a real endpoint.
 */
export async function simulateFormSuccess(delayMs = 500): Promise<{ ok: true }> {
  await new Promise((r) => setTimeout(r, delayMs))
  return { ok: true as const }
}
