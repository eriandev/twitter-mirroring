export * from './useAuth.js'
export * from './useTime.js'
export * from './useTweets.js'

/**
 * @typedef {object} TweetInfo
 *
 * @prop {object} owner
 * @prop {string} owner.user
 * @prop {string} owner.name
 *
 * @prop {object} reactions
 * @prop {number} reactions.comments
 * @prop {number} reactions.retweets
 * @prop {number} reactions.likes
 *
 * @prop {string} message
 * @prop {number} created_at
 * @prop {boolean} with_media
 *
 * @prop {object} media
 * @prop {string | string[]} media.src
 * @prop {'img' | 'gif' | 'video'} media.type
 */

/**
 * @typedef UseAuth
 * @type {function(): { canPass: CanPass; login: Login }}
 */

/**
 * @typedef CanPass
 * @type {(param: { pathname: string }) => boolean}
 */

/**
 * @typedef Login
 * @type {(param: { name: string, user: string }) => Promise<LoginResponse>}
 */

/**
 * @typedef {{
 *  name?: string
 *  user?: string
 *  image?: string
 *  error?: {
 *    param: 'name' | 'user'
 *    message: string
 *  }
 * }} LoginResponse
 */
