<script>
  import Icon from '@/components/atoms/Icon.svelte'
  import Text from '@/components/atoms/Text.svelte'
  import Link from '@/components/atoms/Link.svelte'
  import Input from '@/components/atoms/Input.svelte'
  import Button from '@/components/atoms/Button.svelte'
  import twitterLinks from '@/assets/data/twitter_footer.json'
</script>

<main class="w-full lg:grid lg:min-h-[calc(100vh-72px)] lg:grid-cols-[minmax(0,1038px)_770px]">
  <aside
    class="hidden lg:grid lg:w-full lg:place-items-center lg:bg-[url(images/lohp_1302w.png)] lg:bg-cover lg:bg-top lg:bg-no-repeat lg:text-white"
  >
    <Icon name="logo" class="lg:my-[30px] lg:h-5/6 lg:max-h-[440px] lg:w-5/6 lg:max-w-[440px] lg:px-5" />
  </aside>

  <section class="mx-auto h-min w-full max-w-[600px] px-8 py-8 md:px-4 lg:max-w-[722px] lg:px-2 xl:self-center">
    <header class="extended-font mb-9 text-gray-100">
      <Icon name="logo" size={42} />
      <Text
        tag="span"
        class="my-[40px] block text-[38px] font-bold leading-[52px] tracking-[-0.8px] sm:text-[61px] sm:leading-[84px] sm:tracking-[-1.2px]"
      >
        Lo que está pasando ahora
      </Text>
      <Text tag="span" class="text-[22px] sm:text-3xl">Únete a Twitter hoy mismo.</Text>
    </header>

    <form class="mt-4 grid max-w-[300px] gap-4">
      <Input placeholder="Nombre" />
      <Input placeholder="Usuario" />
      <Button
        class="mt-2 h-[42px] w-full border border-solid border-gray-200 bg-transparent text-[15px] text-sm text-primary-100 hover:bg-primary-10"
      >
        Inicia sesión
      </Button>
    </form>
  </section>
</main>

<aside class="grid w-full place-items-center bg-[url(images/lohp_1302w.png)] bg-cover bg-no-repeat text-white lg:hidden">
  <Icon name="logo" size={220} class="my-[30px]" />
</aside>

<!-- <picture>
  <source srcset="images/lohp_1302w.png" media="(min-width: 768px)" />
  <img src="images/lohp_850w.png" alt="MDN" />
</picture> -->

<footer class="flex flex-wrap items-center justify-center px-4 py-3">
  {#each twitterLinks as { title, to }}
    <Link external opaque decorated {to} {title} class="pr-4">
      <Text opaque small tag="span">{title}</Text>
    </Link>
  {/each}
  <Text opaque small tag="span">© 2022 Twitter, Inc.</Text>
</footer>

<style lang="postcss">
  .extended-font {
    font-family: 'TwitterChirpExtendedHeavy', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  @media screen and (min-width: 1740px) {
    main {
      min-height: calc(100vh - 48px);
    }
  }
</style>
