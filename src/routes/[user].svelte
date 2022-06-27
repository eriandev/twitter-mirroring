<script>
  import { page } from '$app/stores'
  import { useProfile } from '@/hooks'
  import Profile from '@/components/organisms/Profile.svelte'

  /** @type {import('@/hooks').ProfileInfo} */
  let info
  /** @type {import('@/hooks').TweetInfo[]} */
  let tweets

  const { user } = $page.params
  const { getInfo, getTweets } = useProfile(user)

  info = getInfo()
  tweets = getTweets()
</script>

<Profile {info} {tweets} />
