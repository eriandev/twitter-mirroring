<script>
  // @ts-ignore
  import InlineSVG from 'svelte-inline-svg'

  /** @type {string} */
  export let name
  /** @type {number} */
  export let size = 32

  $: sizing = {
    width: size,
    height: size,
  }
</script>

<InlineSVG src="icons/{name}.svg" {name} {...sizing} {...$$restProps} on:click on:mouseenter on:mouseleave />
