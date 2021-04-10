<template>
  <div class="z-50 sticky top-0">
      <div class="h-12 grid grid-cols-8 justify-items-center items-center bg-octogon">
            <!-- <h2 class="font-mono font-bold text-pinkmon">KP</h2> -->
            <router-link class="transition-all font-mono font-bold text-pinkmon hover:text-pink-300" to="/">KP</router-link>
            <div class="col-span-4"></div>
            <router-link class="transition-all font-mono font-bold text-pinkmon hover:text-pink-300" to="/stuff">Dumb Stuff</router-link>
            <router-link class="transition-all font-mono font-bold text-pinkmon hover:text-pink-300" to="/blog">Blog</router-link>
            <router-link class="transition-all font-mono font-bold text-pinkmon hover:text-pink-300" to="/">
              <div>
                Buy me
                <fa icon="coffee" />
              </div>
            </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>

</style>
