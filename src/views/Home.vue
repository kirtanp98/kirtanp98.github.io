<template>
  <div>
    <Hero name="Kirtan Patel" blurb="Hi I'm a Developer at"/>
    <Footer />

  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Footer,
  },
};
</script>
