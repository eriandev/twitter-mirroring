<script>
  import testInfo from '@/assets/data/test_info.json'
  import testTweets from '@/assets/data/test_tweets.json'
  import Profile from '@/components/organisms/Profile.svelte'
</script>

<Profile info={testInfo} tweets={testTweets} />
