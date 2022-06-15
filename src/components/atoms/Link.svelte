<script>
  /** @type {boolean} */
  export let external = false
  /** @type {boolean} */
  export let primary = false
  /** @type {boolean} */
  export let decorated = false
  /** @type {boolean} */
  export let tiny = false
  /** @type {string} */
  export { href as to }

  /** @type {string} */
  let href

  const target = external ? '_blank' : undefined
  const rel = external ? 'external noopener noreferrer' : undefined
</script>

<a {...$$restProps} class:tiny class:primary class:decorated {rel} {target} {href}>
  <slot />
</a>
