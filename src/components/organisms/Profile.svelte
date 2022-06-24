<script>
  import ProfileHeader from '@/components/molecules/ProfileHeader.svelte'
  import Tweets from '@/components/organisms/Tweets.svelte'

  /** @type {import('@/hooks').TweetInfo[]} */
  export let tweets = []
</script>

<ProfileHeader />
<Tweets {tweets} />
