<script>
  import { userTweets } from '@/hooks'
  import Tweets from '@/components/organisms/Tweets.svelte'

  /** @returns {import('@/hooks').TweetInfo[]} */
  const { getTweets } = userTweets()
</script>

<Tweets tweets={getTweets()} />
