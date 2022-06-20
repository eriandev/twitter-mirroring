import { goto } from '$app/navigation'
import { USER_STORAGE } from '@/shared/constants'

/** @type {import('@/hooks').UseAuth} */
export function useAuth() {
  /** @type {import('@/hooks').Login} */
  const login = async ({ name, user }) => {
    if (!name || typeof name !== 'string') return { error: { param: 'name', message: 'Empty or invalid field' } }
    if (!user || typeof user !== 'string') return { error: { param: 'user', message: 'Empty or invalid field' } }

    const userInfo = { info: { name, user, image: `https://unavatar.io/twitter/${user}` } }
    window.localStorage.setItem(USER_STORAGE, JSON.stringify(userInfo))

    goto('/home')
    return userInfo
  }

  return { login }
}
