<script>
  import Text from '@/components/atoms/Text.svelte'
  import Image from '@/components/atoms/Image.svelte'
  import TweetHeader from '@/components/molecules/TweetHeader.svelte'
  import TweetFooter from '@/components/molecules/TweetFooter.svelte'

  /**
   * @typedef Owner
   * @type {object}
   *
   * @prop {string} user
   * @prop {string} name
   * @prop {string=} image
   */

  /**
   * @typedef Reactions
   * @type {object}
   *
   * @prop {number=} comments
   * @prop {number=} retweets
   * @prop {number=} likes
   */

  /** @type {Owner} */
  export let owner
  /** @type {number} */
  export let createdAt
  /** @type {string} */
  export let message
  /** @type {Reactions} */
  export let reactions

  $: profileImg = owner?.image ?? 'images/default_profile.png'
</script>

<article class="tweet">
  <Image alt={owner.name} src={profileImg} class="h-12 w-12 rounded-full" />

  <div class="tweet-content">
    <TweetHeader {createdAt} {...owner} />

    <Text tag="p" class="tweet-message">
      {message}
    </Text>

    <slot />

    <TweetFooter {...reactions} />
  </div>
</article>
