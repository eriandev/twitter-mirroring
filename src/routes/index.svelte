<script>
  import Tweet from '@/components/molecules/Tweet.svelte'
  import TweetMedia from '@/components/molecules/TweetMedia.svelte'

  const message =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum! Dolorum suscipit eos iusto excepturi ipsam, amet odit ut velit. Reiciendis, numquam nisi! Omnis inventore repellat hic ut minus quisquam?'
</script>

<Tweet
  owner={{ name: 'Erick Vargas', user: 'eriandev' }}
  createdAt={1655391763172}
  {message}
  reactions={{
    comments: 0,
    retweets: 0,
    likes: 0,
  }}
/>

<Tweet
  owner={{ name: 'Erick Vargas', user: 'eriandev' }}
  createdAt={1655391763172}
  message="Un nuevo tweet"
  reactions={{
    comments: 0,
    retweets: 0,
    likes: 0,
  }}
>
  <TweetMedia
    type="img"
    src={['https://pbs.twimg.com/media/FVTiTfPWIAACR7v?format=png', 'https://pbs.twimg.com/media/FPnoBtjWYAAnHYb?format=jpg']}
  />
</Tweet>

<Tweet
  owner={{ name: 'Erick Vargas', user: 'eriandev' }}
  createdAt={1655391763172}
  message="Un nuevo tweet"
  reactions={{
    comments: 0,
    retweets: 0,
    likes: 0,
  }}
>
  <TweetMedia
    type="img"
    src={[
      'https://pbs.twimg.com/media/FVTiTfPWIAACR7v?format=png',
      'https://pbs.twimg.com/media/FVTiTfPWIAACR7v?format=png',
      'https://pbs.twimg.com/media/FPnoBtjWYAAnHYb?format=jpg',
    ]}
  />
</Tweet>

<Tweet
  owner={{ name: 'Erick Vargas', user: 'eriandev' }}
  createdAt={1655391763172}
  message="Un nuevo tweet"
  reactions={{
    comments: 0,
    retweets: 0,
    likes: 0,
  }}
>
  <TweetMedia
    type="img"
    src={[
      'https://pbs.twimg.com/media/FSrp2zIWAAEuYDn?format=jpg&name=small',
      'https://pbs.twimg.com/media/FVTiTfPWIAACR7v?format=png',
      'https://pbs.twimg.com/media/FVTiTfPWIAACR7v?format=png',
      'https://pbs.twimg.com/media/FPnoBtjWYAAnHYb?format=jpg',
    ]}
  />
</Tweet>

<Tweet
  owner={{ name: 'Erick Vargas', user: 'eriandev' }}
  createdAt={1655391763172}
  message="Un nuevo tweet"
  reactions={{
    comments: 0,
    retweets: 0,
    likes: 0,
  }}
>
  <TweetMedia type="img" src="https://pbs.twimg.com/media/FVTiTfPWIAACR7v?format=png" />
</Tweet>

<Tweet
  owner={{ name: 'Erick Vargas', user: 'eriandev' }}
  createdAt={1655391763172}
  message="Un nuevo tweet"
  reactions={{
    comments: 0,
    retweets: 0,
    likes: 0,
  }}
>
  <TweetMedia type="img" src="https://media.giphy.com/media/3o85xwSzDvuE1b2tW0/giphy.gif" />
</Tweet>

<Tweet
  owner={{ name: 'Erick Vargas', user: 'eriandev' }}
  createdAt={1655391763172}
  message="Amazing tweet!"
  reactions={{
    comments: 0,
    retweets: 0,
    likes: 0,
  }}
>
  <TweetMedia type="img" src="https://pbs.twimg.com/media/FPnoBtjWYAAnHYb?format=jpg" />
</Tweet>
