import tweets from '@/assets/data/test_tweets.json'

export function userTweets() {
  /** @returns {import('@/hooks').TweetInfo[]} */
  // @ts-ignore
  const getTweets = () => tweets

  return { getTweets }
}
