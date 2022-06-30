import { get } from 'svelte/store'
import { browser } from '$app/env'
import { getStores } from '$app/stores'
import { navigateTo } from '@/shared/functions'
import { BASE_PATH, USER_STORAGE } from '@/shared/constants'

/** @type {import('@/hooks').UseAuth} */
export function useAuth() {
  const { session } = getStores()
  const { logged } = get(session)

  /** @param {{ pathname: string }} param */
  const canPass = ({ pathname }) => {
    if (browser) {
      const { name, user } = JSON.parse(window.localStorage.getItem(USER_STORAGE) || '{}')

      if (pathname === '/twitter-mirroring') {
        if (logged) {
          if (!name || !user) {
            window.localStorage.removeItem(USER_STORAGE)
            session.set({ logged: false })
            navigateTo('/')
            return false
          }

          navigateTo('home')
          return false
        }

        if (logged === undefined) {
          if (name && user) {
            session.set({ name, user, logged: true })
            navigateTo('home')
            return false
          }

          return true
        }

        return true
      }

      if (pathname === `${BASE_PATH}home`) {
        if (logged === undefined) {
          if (!name || !user) {
            navigateTo('/')
            return false
          }

          session.set({ name, user, logged: true })
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

    const userInfo = { name, user: user.toLocaleLowerCase() }
    window.localStorage.setItem(USER_STORAGE, JSON.stringify(userInfo))

    navigateTo('home')
    return userInfo
  }

  return { canPass, login }
}
