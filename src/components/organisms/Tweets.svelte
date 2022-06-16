<script>
  import Text from '@/components/atoms/Text.svelte'
  import Tweet from '@/components/molecules/Tweet.svelte'
  import TweetMedia from '@/components/molecules/TweetMedia.svelte'

  /** @type {import('@/hooks').TweetInfo[]} */
  export let tweets = []

  const endClasses = 'block w-full py-4 text-center'
</script>

{#if tweets.length}
  {#each tweets as { owner, message, reactions, with_media, media, created_at }}
    <Tweet {owner} createdAt={created_at} {message} {reactions}>
      {#if with_media}
        <TweetMedia type={media.type} src={media.src} />
      {/if}
    </Tweet>
  {/each}
  <Text tag="span" class={endClasses}>Fin</Text>
{:else}
  <Text tag="span" class={endClasses}>No hay tweets</Text>
{/if}
