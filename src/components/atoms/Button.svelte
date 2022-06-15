<script>
  /** @type {boolean} */
  export let primary = false
  /** @type {boolean} */
  export let secondary = false
  /** @type {boolean} */
  export let ghost = false
  /** @type {boolean} */
  export let danger = false
  /** @type {boolean} */
  export let large = false

  const btn = true
</script>

<button {...$$restProps} class:btn class:primary class:secondary class:ghost class:danger class:large on:click on:mouseenter on:mouseleave>
  <slot />
</button>
