<script>
  import Icon from '@/components/atoms/Icon.svelte'
  import Text from '@/components/atoms/Text.svelte'
  import Link from '@/components/atoms/Link.svelte'
  // @ts-ignore
  import sidebarList from '@/assets/data/sidebar_list'
</script>

<nav class="sidebar">
  <Link to="/home" class="logo">
    <Icon name="logo" size={28} />
  </Link>

  <ul>
    {#each sidebarList as { name, text }, i}
      <li class={i > 4 ? 'on-md' : undefined}>
        <Icon {name} size={26} />
        <Text large tag="span" class="hidden xl:block">{text}</Text>
      </li>
    {/each}
  </ul>
</nav>
