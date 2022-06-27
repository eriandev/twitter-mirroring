<script>
  import Link from '@/components/atoms/Link.svelte'
  import Icon from '@/components/atoms/Icon.svelte'
  import Text from '@/components/atoms/Text.svelte'
  import Title from '@/components/atoms/Title.svelte'
  import Image from '@/components/atoms/Image.svelte'
  import Button from '@/components/atoms/Button.svelte'

  /** @type {string=} */
  export let user = undefined
  /** @type {string=} */
  export let name = undefined
  /** @type {string=} */
  export let link = undefined
  /** @type {string=} */
  export let country = undefined
  /** @type {string=} */
  export let birthday = undefined
  /** @type {number=} */
  export let createdAt = undefined
  /** @type {number=} */
  export let following = undefined
  /** @type {number=} */
  export let followers = undefined
  /** @type {string=} */
  export let description = undefined
</script>

<header class="profile-header">
  <div class="cover">
    <Image src="images/default_profile.png" alt="" />
  </div>

  {#if name}
    <section>
      <article class="action">
        <Button ghost>Edit profile</Button>
      </article>

      <article class="user">
        <Title tag="h1">{name}</Title>
        <Text opaque tag="span" class="block text-sm leading-none">@{user}</Text>
      </article>

      {#if description}
        <article class="description">{description}</article>
      {/if}

      <article class="info">
        {#if country}
          <div>
            <Icon name="location" size={17.5} />
            <span>{country}</span>
          </div>
        {/if}

        {#if link}
          <div>
            <Icon name="chain" size={17.5} />
            <span>
              <Link external primary to={link}>{link}</Link>
            </span>
          </div>
        {/if}

        {#if birthday}
          <div>
            <Icon name="balloon" size={17.5} />
            <span>{birthday}</span>
          </div>
        {/if}

        {#if createdAt}
          <div>
            <Icon name="calendar" size={17.5} />
            <span>{createdAt}</span>
          </div>
        {/if}
      </article>

      <article class="stats">
        <div>
          <Text tag="span" class="white text-[13px] font-bold">{following ?? 0}</Text>
          <Text opaque tag="span" class="text-[13px]">Following</Text>
        </div>
        <div>
          <Text tag="span" class="white text-[13px] font-bold">{followers ?? 0}</Text>
          <Text opaque tag="span" class="text-[13px]">Followers</Text>
        </div>
      </article>
    </section>
  {:else}
    <section>
      <aside class="action">
        <span class="hidden">x</span>
      </aside>

      <article class="user">
        <Title tag="h1">@{user}</Title>
      </article>
    </section>
  {/if}
</header>
