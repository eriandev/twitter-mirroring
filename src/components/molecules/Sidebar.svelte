<script>
  import Icon from '@/components/atoms/Icon.svelte'
  import Text from '@/components/atoms/Text.svelte'
  import Link from '@/components/atoms/Link.svelte'
  import sidebarList from '@/assets/data/sidebar_list.json'
</script>

<nav class="sidebar">
  <Link to="/home" class="logo on-sm">
    <Icon name="logo" size={28} />
  </Link>

  <ul>
    {#each sidebarList as { name, to, enabled, text }, i}
      {@const linkPath = enabled ? to : '/home'}
      {@const validatedLinkPath = linkPath === '/profile' ? '/eriandev' : linkPath}

      <li class={i > 4 ? 'on-sm' : undefined}>
        <Link prefetch to={validatedLinkPath} title={text} class="hover:bg-gray-100 hover:bg-opacity-10" disabled={!enabled}>
          <Icon {name} size={26} />
          <Text large tag="span" class="hidden xl:block">{text}</Text>
        </Link>
      </li>
    {/each}
  </ul>
</nav>
