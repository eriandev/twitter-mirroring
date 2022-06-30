import { goto } from '$app/navigation'

/** @param {string} to */
export function navigateTo(to) {
  if (to === '/') goto('/twitter-mirroring/')
  else goto(`/twitter-mirroring/${to}`)
}
