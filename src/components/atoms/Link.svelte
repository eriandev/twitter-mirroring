<script>
  /** @type {boolean} */
  export let external = false
  /** @type {boolean} */
  export let prefetch = false
  /** @type {boolean} */
  export let primary = false
  /** @type {boolean} */
  export let opaque = false
  /** @type {boolean} */
  export let decorated = false
  /** @type {boolean} */
  export let tiny = false
  /** @type {boolean} */
  export let disabled = false
  /** @type {string} */
  export let to

  const link = true
  const target = external ? '_blank' : undefined
  const href = external ? to : `/twitter-mirroring/${to}`
  const rel = external ? 'external noopener noreferrer' : undefined
</script>

{#if prefetch}
  <a
    sveltekit:prefetch
    {rel}
    {target}
    {href}
    {...$$restProps}
    class:link
    class:tiny
    class:primary
    class:opaque
    class:decorated
    class:disabled
  >
    <slot />
  </a>
{:else}
  <a {rel} {target} {href} {...$$restProps} class:link class:tiny class:primary class:opaque class:decorated class:disabled>
    <slot />
  </a>
{/if}
