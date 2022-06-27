export * from './useAuth.js'
export * from './useTime.js'
export * from './useProfile.js'

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
 *  error?: {
 *    param: 'name' | 'user'
 *    message: string
 *  }
 * }} LoginResponse
 */

/**
 * @typedef GetInfo
 * @type {() => ProfileInfo}
 */

/**
 * @typedef GetTweets
 * @type {() => TweetInfo[]}
 */

/**
 * @typedef {object} ProfileInfo
 *
 * @prop {string=} user
 * @prop {string=} name
 * @prop {string=} link
 * @prop {string=} country
 * @prop {string=} birthday
 * @prop {number=} createdAt
 * @prop {number=} following
 * @prop {number=} followers
 * @prop {string=} description
 */

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
 * @prop {string} media.type
 * Avaible values: 'img' | 'gif' | 'video'
 */
