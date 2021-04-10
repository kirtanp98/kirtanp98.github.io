<template>
  <div>
    <Title title="Skills" />
    <h2 class="pl-12 text-2xl text-pinkmon">Languages</h2>
    <div class="grid grid-cols-4 gap-4 px-16 pt-8 justify-items-center">
        <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill"/>
    </div>
    <h2 class="pl-12 text-2xl text-pinkmon">Frameworks</h2>
    <div class="grid grid-cols-4 gap-4 px-16 pt-8 justify-items-center">
        <SkillCard v-for="frame in frameworks" :key="frame.name" :skill="frame"/>
    </div>
    <h2 class="pl-12 text-2xl text-pinkmon">Random</h2>
    <div class="grid grid-cols-4 gap-4 px-16 pt-8 justify-items-center">
        <SkillCard v-for="ran in random" :key="ran.name" :skill="ran"/>
    </div>
  </div>
</template>

<script>
import Title from './subcomponents/Title.vue';
import SkillCard from './subcomponents/SkillCard.vue';

export default {
  name: 'Skills',
  components: {
    Title,
    SkillCard,
  },
  data() {
    return {
      skills: [
        {
          name: 'Swift',
          icon: 'swift',
        },
        {
          name: 'Typescript',
          icon: 'js',
        },
        {
          name: 'Javascript',
          icon: 'js-square',
        },
        {
          name: 'Python',
          icon: 'python',
        },
        {
          name: 'Java',
          icon: 'java',
        },
      ],
      frameworks: [
        {
          name: 'SwiftUI',
          icon: 'swift',
        },
        {
          name: 'Angular',
          icon: 'angular',
        },
        {
          name: 'Vue',
          icon: 'vuejs',
        },
      ],
      random: [
        {
          name: 'Git',
          icon: 'git',
        },
        {
          name: 'Github',
          icon: 'github',
        },
        {
          name: 'Bitbucket',
          icon: 'bitbucket',
        },
      ],
    };
  },
};
</script>

<style>

</style>
