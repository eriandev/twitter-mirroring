import { get } from 'svelte/store'
import { browser } from '$app/env'
import { goto } from '$app/navigation'
import { getStores } from '$app/stores'
import { USER_STORAGE } from '@/shared/constants'

/** @type {import('@/hooks').UseAuth} */
export function useAuth() {
  const { session } = getStores()
  const { logged } = get(session)

  /** @param {{ pathname: string }} param */
  const canPass = ({ pathname }) => {
    if (browser) {
      const { name, user, image } = JSON.parse(window.localStorage.getItem(USER_STORAGE) || '{}')

      if (pathname === '/') {
        if (logged) {
          if (!name || !user) {
            window.localStorage.removeItem(USER_STORAGE)
            session.set({ logged: false })
            goto('/')
            return false
          }

          goto('/home')
          return false
        }

        if (logged === undefined) {
          if (name && user) {
            session.set({ name, user, image, logged: true })
            goto('/home')
            return false
          }

          return true
        }

        return true
      }

      if (pathname === '/home') {
        if (logged === undefined) {
          if (!name || !user) {
            goto('/')
            return false
          }

          session.set({ name, user, image, logged: true })
          return true
        }

        return true
      }

      return true
    }

    return false
  }

  /** @type {import('@/hooks').Login} */
  const login = async ({ name, user }) => {
    if (!name || typeof name !== 'string') return { error: { param: 'name', message: 'Empty or invalid field' } }
    if (!user || typeof user !== 'string') return { error: { param: 'user', message: 'Empty or invalid field' } }

    const userInfo = { name, user, image: `https://unavatar.io/twitter/${user}` }
    window.localStorage.setItem(USER_STORAGE, JSON.stringify(userInfo))

    goto('/home')
    return userInfo
  }

  return { canPass, login }
}
