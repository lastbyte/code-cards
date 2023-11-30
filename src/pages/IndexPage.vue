<template>
  <q-page class="row relative-position justify-center items-center">
    <q-jumbotron>
      <h3 class="q-display-3 text-weight-medium">Hi, devs!</h3>
      <div class="q-subheading">
        Explore a vast collection of meticulously crafted multiple-choice questions
        designed to challenge and refine your JavaScript knowledge. Whether you're
        a beginner or a seasoned developer, our dynamic quiz layout offers an engaging
        and fun way to learn, practice, and master JavaScript. Start your journey
        towards JavaScript expertise today!
      </div>
      <hr class="q-hr q-my-lg">
      <div class="row items-center justify-between">
        <span class="q-title">Take the Challenge Now!</span>
        <q-btn to="/js-quiz" flat color="primary" label="🚀&nbsp; start challenge"/>
      </div>
    </q-jumbotron>
  </q-page>
</template>
<script setup lang="ts">
import { useAppStore } from 'stores/app-store';

const appStore = useAppStore();

appStore.setBreadcrumb([{ to: '/', display: 'Cards', icon: 'code' }]);

</script>
