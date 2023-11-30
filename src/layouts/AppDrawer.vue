<script setup lang="ts">
import { useAppStore } from 'stores/app-store';
import { useQuasar } from 'quasar';
import { fabGithubSquare, fabLinkedinIn } from '@quasar/extras/fontawesome-v5';
import { jsQuestions } from 'src/quiz';
import { useJsQuizStore } from 'stores/js-quiz-store';
import { TQuestion } from 'app/src';

const $q = useQuasar();
const appStore = useAppStore();
const jsQuizStore = useJsQuizStore();

function handleMenuClick(question: TQuestion) {
  jsQuizStore.setQuestion(question.id);
  appStore.toggleDrawer();
}
</script>

<template>
  <q-drawer
    v-model="appStore.drawer"
    show-if-above
    :width="300"
    :breakpoint="800"
    elevated
    class="full-height"
  >
    <div class="full-height q-py-lg column items-center gap-2">
      <div class="column">
        <q-btn-group class="tapred">
          <q-btn
            :flat="!$q.dark.isActive"
            class="bg-dark"
            :color="!$q.dark.isActive ?  'primary' : ''"
            @click="$q.dark.set(false)">
            <div class="row gap-2">
              <q-icon name="light_mode"/>
              <span> light </span>
            </div>
          </q-btn>
          <q-btn :flat="$q.dark.isActive"
                 class="bg-dark"
                 :color="$q.dark.isActive ?  'primary' : ''"
                 @click="$q.dark.set(true)">
            <div class="row gap-2">
              <q-icon name="dark_mode"/>
              <span> dark </span>
            </div>
          </q-btn>
        </q-btn-group>
      </div>
      <div class="column full-width justify-between items-center">
          <span class="text-center">
            Heartfelt thanks to Lydia Hallie for her exceptional
            <a class="text-secondary"
               style="text-decoration: none !important;"
               href="https://github.com/lydiahallie/javascript-questions">JavaScript Questions</a>
            ,The github  repository that powers this website's content.
          </span>
      </div>
      <div class="menu column col no-wrap scroll-y full-width q-gutter-md">
        <q-btn flat outline
               :color="question.id === jsQuizStore.questionIndex ?  'secondary' : ''"
               v-bind:key="index" v-for="(question,index) in jsQuestions"
               @click="() => { handleMenuClick(question)}">
          <div class="row full-width justify-start">QUESTION {{ question.id }}</div>
        </q-btn>
      </div>
      <div class="row full-width justify-center q-col-gutter-sm">
        <a style="text-decoration: none" href="https://github.com/lastbyte/code-cards">
          <q-icon size="sm" color="secondary" :name="fabGithubSquare"/>
        </a>
        <a style="text-decoration: none" href="https://www.linkedin.com/in/lastbyte/">
          <q-icon size="sm" color="secondary" :name="fabLinkedinIn"/>
        </a>
      </div>
    </div>

  </q-drawer>
</template>

<style scoped lang="scss">
.menu {
  border-left: 4px solid $secondary;
}
</style>
