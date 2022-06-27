import { USER_STORAGE } from '@/shared/constants'

/**
 * @param {string} userName
 * @returns {{
 *  getInfo: import('@/hooks').GetInfo;
 *  getTweets: import('@/hooks').GetTweets
 * }}
 */
export function useProfile(userName) {
  const getInfo = () => {
    /** @type {{ info: import('@/hooks').ProfileInfo }} */
    const { info } = JSON.parse(window.localStorage.getItem(`user-${userName}`) ?? '{}')
    const { name, user } = JSON.parse(window.localStorage.getItem(USER_STORAGE) ?? '{}')

    if (userName !== user) return { name: undefined, user: userName }
    return { ...info, name, user }
  }

  const getTweets = () => {
    /** @type {{ tweets: import('@/hooks').TweetInfo[] }} */
    const { tweets } = JSON.parse(window.localStorage.getItem(`user-${userName}`) ?? '{}')
    return tweets
  }

  return { getInfo, getTweets }
}
