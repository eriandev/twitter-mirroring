<script>
  import { afterNavigate, beforeNavigate } from '$app/navigation'
  import Title from '@/components/atoms/Title.svelte'
  import Sidebar from '@/components/molecules/Sidebar.svelte'
  import GuardScreen from '@/components/atoms/GuardScreen.svelte'
  import { useAuth } from '@/hooks'
  import '@/app.css'

  let loading = true
  let actualRoute = '/'

  const { canPass } = useAuth()

  beforeNavigate(() => (loading = true))
  afterNavigate(({ to }) => {
    actualRoute = to.pathname
    loading = !canPass({ pathname: to.pathname })
  })
</script>

{#if loading}
  <GuardScreen />
{:else if actualRoute === '/'}
  <slot />
{:else}
  <div class="sm:grid sm:grid-cols-sm-layout md:grid-cols-md-layout lg:grid-cols-sm-layout lg:justify-center xl:grid-cols-xl-layout">
    <Sidebar />
    <main class="lg:grid lg:grid-cols-lg-main lg:gap-5 xl:grid-cols-xl-main xl:gap-[30px]">
      <section class="h-full min-h-[100vh] w-full sm:border-x sm:border-solid sm:border-gray-300">
        <header class="sticky top-0 z-10 flex h-[54px] w-full items-center bg-black bg-opacity-[0.65] px-4 backdrop-blur">
          <Title tag="h2">Home</Title>
        </header>
        <slot />
      </section>
      <section class="hidden lg:block">Trends Coming Soon</section>
    </main>
  </div>
{/if}
