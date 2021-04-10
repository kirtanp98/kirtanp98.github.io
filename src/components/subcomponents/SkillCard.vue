<template>
    <div class="transform container h-40 transition hover:bg-pinkmon hover:bg-opacity-25 hover:scale-110 flex flex-col justify-center items-center rounded-md">
        <fa class="fill-current text-pinkmon" :icon="['fab', skill.icon]" size="3x" />
        <p class="text-pinkmon">{{skill.name}}</p>
    </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    skill: Object,
  },
};
</script>

<style>

</style>
