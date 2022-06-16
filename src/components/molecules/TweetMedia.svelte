<script>
  import Image from '@/components/atoms/Image.svelte'

  /** @type {string} */
  export let type
  /** @type {string | string[]} */
  export let src
</script>

<section class="tweet-media">
  {#if !Array.isArray(src) && type === 'img'}
    <Image {src} alt="Image post" class="single" />
  {/if}
</section>
