<script setup lang="ts">

import QuizQuestion from 'components/QuizQuestion.vue';
import { jsQuestions } from 'src/quiz';
import { ref } from 'vue';

const questionName = ref('1');
const carousel = ref();

</script>

<template>
  <q-page class="row relative-position justify-center">
    <q-carousel ref="carousel"
                animated
                swipeable
                transition-prev="slide-right"
                transition-next="slide-left"
                v-model="questionName"
                class="bg-transparent full-width full-height quiz-carousel">
      <q-carousel-slide v-bind:key="index" :name="question.id"
                        class="q-px-none"
                        v-for="(question, index) in jsQuestions">
        <quiz-question :question="question"/>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            rounded dense color="primary" text-color="black" icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            rounded dense color="primary" text-color="black" icon-right="arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
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
