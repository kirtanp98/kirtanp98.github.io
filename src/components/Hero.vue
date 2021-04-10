<template>
  <div>
    <!-- <div class="z-10 animate-bounce">
        <p>Scroll down</p>
        <p>V</p>
    </div> -->
    <div class="flex flex-col h-screen justify-center items-center">
      <h1 class="font-sans text-8xl text-pinkmon">{{name}}</h1>
      <div class="flex flex-row items-center">
        <h3 class="font-sans text-xl text-pinkmon pr-1">{{blurb}}</h3>
        <img class="w-4 svgFill" :src="vanguard" alt="my-logo" />
      </div>
      <div class="grid grid-cols-3 gap-8 pt-5">
        <a href="https://twitter.com/Kirtanisnothere">
          <fa class="fill-current text-pinkmon hover:text-blue-400" :icon="['fab', 'twitter']" size="2x" />
        </a>
        <a href="https://github.com/kirtanp98">
          <fa class="fill-current text-pinkmon hover:text-black" :icon="['fab', 'github']" size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/kirtanpatel98/">
          <fa class="fill-current text-pinkmon hover:text-blue-600" :icon="['fab', 'linkedin']" size="2x" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import vanguardSvg from '@/assets/vanguard.svg';

export default {
  name: 'Hero',
  props: {
    name: String,
    blurb: String,
  },
  data() {
    return {
      vanguard: vanguardSvg,
    };
  },
};
</script>

<style lang="scss" scoped>
.svgFill {
  fill: #A20A35
};
</style>
