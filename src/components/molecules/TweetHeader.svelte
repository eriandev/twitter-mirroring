<script>
  import Text from '@/components/atoms/Text.svelte'

  /** @type {string} */
  export let user
  /** @type {string} */
  export let name
  /** @type {number} */
  export let createdAt
</script>

<header class="tweet-header">
  <Text tag="span" class="font-bold">{name}</Text>
  <Text opaque tag="span">@{user}</Text>
  <Text opaque tag="span">· {createdAt}</Text>
</header>
