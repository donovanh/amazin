<script>
  import AnimateTextList from './AnimateTextList.svelte'
  const texts = [
    { name: 'American', domain: 'com' },
    { name: 'British', domain: 'co.uk' },
    { name: 'German', domain: 'de' },
    { name: 'Italian', domain: 'it' },
    { name: 'Austrian', domain: 'at' },
    { name: 'Brazillian', domain: 'com.br' },
    { name: 'Canadian', domain: 'ca' },
    { name: 'Australian', domain: 'com.au' },
    { name: 'Chinese', domain: 'cn' },
    { name: 'Spanish', domain: 'es' },
    { name: 'French', domain: 'fr' },
    { name: 'Indian', domain: 'in' },
    { name: 'Japanese', domain: 'co.jp' },
    { name: 'Mexican', domain: 'com.mx' }
  ]

  const names = texts.map(text => text.name)
  const domains = texts.map(text => text.domain)
</script>

<style>
  p {
    animation: show 500ms 500ms ease-out forwards;
    opacity: 0;
    transform: translateZ(0);
  }
  .country {
    font-size: 22px;
  }
  .domain {
    font-size: 22px;
  }
</style>

<p>
    ... to send your
    <span class="country"><AnimateTextList list={names} delay={2000} /></span>
    customers to
    <span class="domain">Amazon.<AnimateTextList list={domains} delay={2000} /></span></p>