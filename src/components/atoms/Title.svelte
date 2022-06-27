<script>
  /** @type {'h1' | 'h2' | 'h3'} */
  export let tag
  /** @type {boolean} */
  export let heavy = false

  const title = true
</script>

<svelte:element this={tag} {...$$restProps} class:title class:heavy>
  <slot />
</svelte:element>
