<script>
  /** @type {string} */
  export let src
  /** @type {string} */
  export let alt
  /** @type {boolean} */
  export let lazy = false
</script>

<img {src} {alt} loading={lazy ? 'lazy' : undefined} {...$$restProps} />
