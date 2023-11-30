<script setup lang="ts">
import CodeDisplay from 'components/CodeDisplay.vue';
import { useAppStore } from 'stores/app-store';
import { TQuestion } from 'app/src';
import { nextTick, ref } from 'vue';
import MarkdownRenderer from 'components/MarkdownRenderer.vue';
import AnswerExplanation from 'components/AnswerExplanation.vue';
import { useJsQuizStore } from 'stores/js-quiz-store';
import ConfettiExplosion from 'vue-confetti-explosion';

const appStore = useAppStore();
const jsQuizStore = useJsQuizStore();

appStore.setBreadcrumb([{ to: '/', display: 'Cards', icon: 'code' }, {
  to: '/js-quiz',
  display: 'Javascript',
  icon: 'javascript',
}]);

const props = defineProps<{ question: TQuestion }>();
const selection = ref();
const confettiVisible = ref(false);

const handleOptionSelection = (answer: number, correct: boolean) => {
  selection.value = answer;
  if (correct) {
    setTimeout(() => {
      jsQuizStore.toggleExplanation();
    }, 400);
    confettiVisible.value = false;
    nextTick(() => {
      confettiVisible.value = true;
    });
  }
};

</script>

<template>
  <div class="column full-width relative-position">
    <ConfettiExplosion class="absolute-bottom" :particleCount="200"
                       :force="0.3" v-if="confettiVisible"/>
    <div class="row items-center q-gutter-sm">
      <q-avatar round color="primary" class="text-weight-bold text-dark">
        {{ $props.question.id }}
      </q-avatar>
      <span class="text-body1"> {{ $props.question.title }}</span>
    </div>
    <div class="row full-width relative-position">
      <code-display v-if="$props.question.code" :code="$props.question.code"></code-display>
    </div>
    <div class="spacer" v-if="!question.code"></div>
    <div class="column full-width gap-2">
      <template v-bind:key="index"
                v-for="(option, index) in $props.question.options">
        <div class="row full-width tapred justify-between"
             :class="selection === index  ? option.correct?
              'bg-green-2 text-positive' : 'bg-red-2 text-negative' : ''">
          <q-checkbox
            class="q-pa-sm tapred option full-width option bg-code"
            :color="selection === index  ? option.correct?
              'positive' : 'negative' : ''"
            :model-value="selection === index"
            :checked-icon="option.correct ? 'task_alt' : 'highlight_off'"
            unchecked-icon="radio_button_unchecked"
            :aria-selected="selection === index? 'true' : 'false'"
            :aria-correct="option.correct ? 'true' : 'false'"
            @click="(e) => {handleOptionSelection(index,option.correct )}"
          >
            <markdown-renderer :source="option.text"></markdown-renderer>
          </q-checkbox>
        </div>
      </template>
    </div>
    <answer-explanation :question="question" :open="jsQuizStore.explanation"/>
  </div>
</template>

<style lang="scss">

.spacer {
  height: 80px;
}

.option {
  border: 1px solid $primary;
}

.option[aria-selected=true][aria-correct=true] {
  border: 1px solid $positive;
}

.option[aria-selected=true][aria-correct=false] {
  border: 1px solid $negative;
}
</style>
