<script setup lang="ts">

import QuizQuestion from 'components/QuizQuestion.vue';
import { jsQuestions } from 'src/quiz';
import { ref } from 'vue';
import { useJsQuizStore } from 'stores/js-quiz-store';
import { useRoute } from 'vue-router';
import { useAppStore } from 'stores/app-store';

const jsQuizStore = useJsQuizStore();
const route = useRoute();
const appStore = useAppStore();
appStore.setPage('js-quiz');
const carousel = ref();

</script>

<template>
  <q-page class="row relative-position justify-center q-pt-lg">
    <q-carousel ref="carousel"
                animated
                transition-prev="scale"
                transition-next="scale"
                :model-value="$route.params.id || jsQuizStore.questionIndex"
                class="bg-transparent full-width full-height quiz-carousel">
      <q-carousel-slide v-bind:key="index" :name="question.id"
                        class="q-px-none"
                        v-for="(question, index) in jsQuestions">
        <quiz-question :question="question"/>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<style scoped lang="scss">
@import "../css/quasar.variables";

.quiz-carousel {
  max-width: 600px;
}
</style>
