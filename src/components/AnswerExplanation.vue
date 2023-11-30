<script setup lang="ts">

import MarkdownRenderer from 'components/MarkdownRenderer.vue';
import { TQuestion } from 'app/src';
import { ref } from 'vue';
import { useJsQuizStore } from 'stores/js-quiz-store';

const props = defineProps<{ question: TQuestion; open: boolean }>();
const jsQuizStore = useJsQuizStore();
const isOpen = ref(props.open);

function handlePrevClick() {
  jsQuizStore.toggleExplanation();
  jsQuizStore.prevQuestion();
}

function handleNextClick() {
  jsQuizStore.toggleExplanation();
  jsQuizStore.nextQuestion();
}
</script>

<template>
  <q-dialog v-model="$props.open">
    <q-card>
      <q-card-section>
        <div class=" row justify-between text-h6">
          <span>Explanation</span>
          <q-btn side round flat outlined icon="close"
                 @click="() => jsQuizStore.toggleExplanation()"/>
        </div>

      </q-card-section>

      <q-separator/>

      <q-card-section style="max-height: 50vh" class="scroll q-gutter-md">
        <markdown-renderer class="text-weight-bold"
                           :source="'Answer : ' +
                             $props.question.options.filter(o => o.correct)[0].text"/>
        <q-separator/>
        <markdown-renderer :source="$props.question.explanation"/>
      </q-card-section>
      <q-separator/>
      <q-card-section style="max-height: 50vh" class="scroll q-gutter-md">
        <q-btn color="primary" text-color="dark" label="Prev"
               @click="() => {handlePrevClick()}"/>
        <q-btn color="primary" text-color="dark" label="Next"
               @click="() => {handleNextClick()}"/>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
