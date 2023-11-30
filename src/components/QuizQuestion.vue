<script setup lang="ts">
import CodeDisplay from 'components/CodeDisplay.vue';
import ConfettiExplosion from 'vue-confetti-explosion';
import { useAppStore } from 'stores/app-store';
import { TQuestion } from 'app/src';
import { nextTick, ref } from 'vue';

const appStore = useAppStore();

appStore.setBreadcrumb([{ to: '/', display: 'Cards', icon: 'code' }, {
  to: '/js-quiz',
  display: 'Javascript',
  icon: 'javascript',
}]);

const props = defineProps<{ questionData: TQuestion }>();
const selection = ref();
const confettiVisible = ref(false);
const explainModal = ref(false);
const isOptionCorrect = (answer: string): boolean => answer === props.questionData.answer.value;

const handleOptionSelection = (answer: string) => {
  selection.value = answer;
  if (isOptionCorrect(answer)) {
    confettiVisible.value = false;
    nextTick(() => {
      confettiVisible.value = true;
    });
  }
};

</script>

<template>
  <div class="column full-width relative-position">
    <div class="row items-center gap-1">
      <q-avatar round color="primary" class="text-weight-bold text-dark">
        {{ $props.questionData.index }}
      </q-avatar>
      <span> {{ $props.questionData.question }}</span>
    </div>
    <div class="row full-width relative-position">
      <code-display :code="$props.questionData.snippets[0].code"></code-display>
      <ConfettiExplosion class="absolute-bottom" :particleCount="200"
                         :force="0.3" v-if="confettiVisible"/>
    </div>
    <div class="column full-width gap-2">
      <template v-bind:key="index"
                v-for="(key, index) in Object.keys($props.questionData.options)">
        <div class="row full-width tapred justify-between"
             :class="selection === key  ? isOptionCorrect(key)?
              'bg-green-2 text-positive' : 'bg-red-2 text-negative' : ''">
          <q-checkbox
            class="q-pa-sm tapred option"
            :color="selection === key  ? isOptionCorrect(key)?
              'positive' : 'negative' : ''"
            :model-value="selection === key"
            :checked-icon="isOptionCorrect(key) ? 'task_alt' : 'highlight_off'"
            unchecked-icon="radio_button_unchecked"
            @click="(e) => {handleOptionSelection(key)}"
          > {{ key + ` - ` + $props.questionData.options[key] }}
          </q-checkbox>
          <q-btn flat outline
                 v-if="key === selection && isOptionCorrect(key)"
                 class="tapred"
                 icon="settings_suggest"
                 @click="explainModal = true">
          </q-btn>
        </div>
      </template>
    </div>
    <q-dialog v-model="explainModal">
      <q-card>
        <q-card-section>
          <div class=" row justify-between text-h6">
            <span>Explanation</span>
            <q-btn side round flat outlined v-close-popup icon="close"/>
          </div>

        </q-card-section>

        <q-separator/>

        <q-card-section style="max-height: 50vh" class="scroll">
          <p class="text-weight-bold">Answer : {{ $props.questionData.answer.value }}</p>
          <p>{{ $props.questionData.answer.explanation }}</p>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!--    <q-btn fab color="accent" class="fixed-bottom-right show-detail shadow-3"-->
    <!--           @click="explainModal = true">-->
    <!--      <q-icon name="settings_suggest" class="text-dark"/>-->
    <!--    </q-btn>-->
  </div>
</template>