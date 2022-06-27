<script>
  import Text from '@/components/atoms/Text.svelte'
  import ProfileHeader from '@/components/molecules/ProfileHeader.svelte'
  import Tweets from '@/components/organisms/Tweets.svelte'

  /** @type {import('@/hooks').ProfileInfo} */
  export let info
  /** @type {import('@/hooks').TweetInfo[]} */
  export let tweets = []
</script>

<ProfileHeader {...info} />
{#if info.name}
  <Tweets {tweets} />
{:else}
  <div class="no-exists">
    <Text tag="span" class="text-3xl font-extrabold">This account doesn’t exist</Text>
    <Text opaque tag="span" class="text-[15px]">Try searching for another.</Text>
  </div>
{/if}
