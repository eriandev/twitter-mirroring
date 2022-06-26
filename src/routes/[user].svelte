<script>
  import { userTweets } from '@/hooks'
  import Profile from '@/components/organisms/Profile.svelte'

  /** @returns {import('@/hooks').TweetInfo[]} */
  const { getTweets } = userTweets()
</script>

<Profile tweets={getTweets()} />
