<script>
  import Title from '@/components/atoms/Title.svelte'
  import '@/app.css'
</script>

<div class="sm:grid sm:grid-cols-sm-layout md:grid-cols-md-layout lg:grid-cols-sm-layout lg:justify-center xl:grid-cols-xl-layout">
  <nav class="fixed bottom-0 grid h-[50px] w-full place-items-center sm:static">Sidebar</nav>
  <main class="lg:grid lg:grid-cols-lg-main lg:gap-5 xl:grid-cols-xl-main xl:gap-[30px]">
    <section class="h-full min-h-[100vh] w-full sm:border-x sm:border-solid sm:border-gray-300">
      <header class="sticky top-0 z-10 flex h-[54px] w-full items-center bg-black bg-opacity-[0.65] px-4 backdrop-blur">
        <Title tag="h2">Home</Title>
      </header>
      <slot />
    </section>
    <section class="hidden lg:block">Trends</section>
  </main>
</div>
