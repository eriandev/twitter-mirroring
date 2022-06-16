<script>
  import Text from '@/components/atoms/Text.svelte'
  import Icon from '@/components/atoms/Icon.svelte'

  /** @type {any} */
  export let owner
  /** @type {number} */
  export let timestamp
  /** @type {string} */
  export let message
  /** @type {number} */
  export let comments = 0
  /** @type {number} */
  export let retweets = 0
  /** @type {number} */
  export let likes = 0

  const size = 18.75
</script>

<article class="tweet">
  <img src={owner?.image ?? 'images/default_profile.png'} alt={owner.name} />
  <div class="content">
    <header>
      <Text tag="span" class="font-bold">{owner.name}</Text>
      <Text opaque tag="span">@{owner.user}</Text>
      <Text opaque tag="span">· {timestamp}</Text>
    </header>
    <Text tag="p" class="text-[15px] leading-5">
      {message}
    </Text>
    <footer>
      <div class="comments">
        <Icon name="comment" {size} />
        {#if comments}
          <Text tag="span" class="text-[13px]">{comments}</Text>
        {/if}
      </div>
      <div class="retweets">
        <Icon name="retweet" {size} />
        {#if retweets}
          <Text tag="span" class="text-[13px]">{retweets}</Text>
        {/if}
      </div>
      <div class="likes">
        <Icon name="heart" {size} />
        {#if likes}
          <Text tag="span" class="text-[13px]">{likes}</Text>
        {/if}
      </div>
      <div class="share">
        <Icon name="share" {size} />
      </div>
    </footer>
  </div>
</article>
