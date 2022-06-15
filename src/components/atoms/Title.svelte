<script>
  /** @type {'h1' | 'h2' | 'h3'} */
  export let tag

  const title = true
</script>

<svelte:element this={tag} {...$$restProps} class:title>
  <slot />
</svelte:element>
