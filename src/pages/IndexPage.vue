<script setup lang="ts">

import QuizQuestion from 'components/QuizQuestion.vue';
import questions from 'src/quiz';
import { ref } from 'vue';

const questionName = ref('question_1');

</script>

<template>
  <q-page class="row relative-position justify-evenly">
    <q-carousel v-model="questionName"
                class="bg-transparent full-width full-height"
                swipeable>
      <q-carousel-slide v-bind:key="index" :name="question.name"
                        class="q-px-none"
                        v-for="(question, index) in questions">
        <QuizQuestion :question-data="question"/>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<style scoped lang="scss">
@import "../css/quasar.variables";
</style>
