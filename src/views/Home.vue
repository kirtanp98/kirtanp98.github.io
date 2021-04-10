<template>
  <div>
    <Header />
    <Hero name="Kirtan Patel" blurb="Hi I'm a Developer at"/>
    <Skills />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import Skills from '../components/Skills.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Skills,
    Footer,
    Header,
  },
};
</script>
