<script>
  import TweetCard from '@/components/molecules/TweetCard.svelte'

  const message =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum! Dolorum suscipit eos iusto excepturi ipsam, amet odit ut velit. Reiciendis, numquam nisi! Omnis inventore repellat hic ut minus quisquam?'
</script>

<TweetCard owner={{ name: 'Erick Vargas', user: 'eriandev' }} timestamp={1655391763172} {message} />
<TweetCard
  owner={{ name: 'Erick Vargas', user: 'eriandev' }}
  timestamp={1655391763172}
  message="Un nuevo tweet"
  media={{ image: 'https://pbs.twimg.com/media/FVTiTfPWIAACR7v?format=png' }}
/>
