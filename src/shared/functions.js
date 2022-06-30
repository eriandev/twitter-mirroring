import { goto } from '$app/navigation'

/** @param {string} to */
export function navigateTo(to) {
  if (to === '/') goto('/twitter-mirroring/')
  else goto(`/twitter-mirroring/${to}`)
}

/** @param {string=} user */
export function getUserAvatar(user) {
  return user ? `https://unavatar.io/twitter/${user}?fallback=images/default_profile.png` : 'images/default_profile.png'
}
