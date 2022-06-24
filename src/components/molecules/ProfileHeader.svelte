<script>
  import Link from '@/components/atoms/Link.svelte'
  import Icon from '@/components/atoms/Icon.svelte'
  import Text from '@/components/atoms/Text.svelte'
  import Title from '@/components/atoms/Title.svelte'
  import Image from '@/components/atoms/Image.svelte'
  import Button from '@/components/atoms/Button.svelte'
</script>

<header class="profile-header">
  <div class="cover">
    <Image src="images/default_profile.png" alt="" />
  </div>
  <section>
    <article class="action">
      <Button ghost>Edit profile</Button>
    </article>

    <article class="user">
      <Title tag="h1">Erick Vargas</Title>
      <Text opaque tag="span" class="block text-sm leading-none">@eriandev</Text>
    </article>

    <article class="description">👨🏽‍💻 Frontend Developer</article>

    <article class="info">
      <div>
        <Icon name="location" size={17.5} />
        <span>Perú</span>
      </div>
      <div>
        <Icon name="chain" size={17.5} />
        <span>
          <Link external primary to="https://erianvc.dev">erianvc.dev</Link>
        </span>
      </div>
      <div>
        <Icon name="balloon" size={17.5} />
        <span>Born September 9, 1995</span>
      </div>
      <div>
        <Icon name="calendar" size={17.5} />
        <span>Joined June 2009</span>
      </div>
    </article>

    <article class="stats">
      <div>
        <Text tag="span" class="white text-[13px] font-bold">90</Text>
        <Text opaque tag="span" class="text-[13px]">Following</Text>
      </div>
      <div>
        <Text tag="span" class="white text-[13px] font-bold">64</Text>
        <Text opaque tag="span" class="text-[13px]">Followers</Text>
      </div>
    </article>
  </section>
</header>
