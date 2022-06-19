<script>
  /** @type {'text' | 'password'} */
  export let type = 'text'
  /** @type {string=} */
  export let placeholder = undefined

  const input = true
</script>

<input {type} {placeholder} {...$$restProps} class:input />
