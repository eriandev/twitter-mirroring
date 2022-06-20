<script>
  /** @type {'text' | 'password'} */
  export let type = 'text'
  /** @type {string=} */
  export let placeholder = undefined
  /** @type {boolean} */
  export let invalid = false
  /** @type {string} */
  export let value = ''

  const input = true

  /**
   * @param {Event} event
   */
  function handleInput({ target }) {
    // @ts-ignore
    value = target?.value
  }
</script>

<input {type} {value} {placeholder} {...$$restProps} class:input class:invalid on:input={handleInput} />
