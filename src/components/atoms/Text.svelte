<script>
  /** @type {'h4' | 'h5' | 'h6' | 'p' | 'span'} */
  export let tag
  /** @type {boolean} */
  export let opaque = false
  /** @type {boolean} */
  export let large = false
  /** @type {boolean} */
  export let small = false
  /** @type {boolean} */
  export let tiny = false

  const text = true
</script>

<svelte:element this={tag} {...$$restProps} class:text class:opaque class:tiny class:small class:large>
  <slot />
</svelte:element>
