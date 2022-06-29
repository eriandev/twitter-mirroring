<script>
  import Icon from '@/components/atoms/Icon.svelte'
  import Text from '@/components/atoms/Text.svelte'
  import Link from '@/components/atoms/Link.svelte'
  import LoginForm from '@/components/molecules/LoginForm.svelte'
  import twitterLinks from '@/assets/data/twitter_footer.json'
</script>

<main class="w-full lg:grid lg:min-h-[calc(100vh-72px)] lg:grid-cols-[minmax(0,1038px)_770px]">
  <aside
    class="hidden lg:grid lg:w-full lg:place-items-center lg:bg-[url(/twitter-mirroring/images/lohp_1302w.png)] lg:bg-cover lg:bg-top lg:bg-no-repeat lg:text-white"
  >
    <Icon name="logo" class="lg:my-[30px] lg:h-5/6 lg:max-h-[440px] lg:w-5/6 lg:max-w-[440px] lg:px-5" />
  </aside>

  <section class="mx-auto h-min w-full max-w-[600px] px-8 py-8 md:px-4 lg:mx-0 lg:self-center lg:px-9">
    <header class="mb-9 font-twitter-extended text-gray-100">
      <Icon name="logo" size={42} />
      <Text gigamax tag="span">Lo que está pasando ahora</Text>
      <Text tag="span" class="text-[22px] sm:text-3xl">Únete a Twitter hoy mismo.</Text>
    </header>

    <LoginForm />
  </section>
</main>

<aside class="grid w-full place-items-center bg-[url(/twitter-mirroring/images/lohp_1302w.png)] bg-cover bg-no-repeat text-white lg:hidden">
  <Icon name="logo" size={220} class="my-[30px]" />
</aside>

<footer class="flex flex-wrap items-center justify-center px-4 py-3">
  {#each twitterLinks as { title, to }}
    <Link external opaque decorated {to} {title} class="pr-4">
      <Text opaque small tag="span">{title}</Text>
    </Link>
  {/each}
  <Text opaque small tag="span">© 2022 Twitter, Inc.</Text>
</footer>

<style lang="postcss">
  @media screen and (min-width: 1740px) {
    main {
      min-height: calc(100vh - 48px);
    }
  }
</style>
