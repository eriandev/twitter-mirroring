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
