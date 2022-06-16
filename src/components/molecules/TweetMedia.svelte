<script>
  import Image from '@/components/atoms/Image.svelte'

  /** @type {'img' | 'gif' | 'video'} */
  export let type
  /** @type {string | string[]} */
  export let src

  $: totalMedias = Array.isArray(src) ? src.length : 1
</script>

<section class:collage={totalMedias > 1} class="tweet-media collage-{totalMedias}">
  {#if Array.isArray(src)}
    {#each src as imgSrc}
      <Image src={imgSrc} alt="Post image" />
    {/each}
  {:else if type === 'video'}
    <div>Video</div>
  {:else}
    <Image {src} alt="Post image" class="single" />
  {/if}
</section>
