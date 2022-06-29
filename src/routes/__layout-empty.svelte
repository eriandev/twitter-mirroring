<script>
  import { afterNavigate, beforeNavigate } from '$app/navigation'
  import GuardScreen from '@/components/atoms/GuardScreen.svelte'
  import { useAuth } from '@/hooks'
  import '@/app.css'

  let loading = true

  const { canPass } = useAuth()

  beforeNavigate(() => (loading = true))
  afterNavigate(({ to }) => loading = !canPass({ pathname: to.pathname }))
</script>

{#if loading}
  <GuardScreen />
{:else}
  <slot />
{/if}
