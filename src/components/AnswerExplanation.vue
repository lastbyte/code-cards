<template>
  <vue-bottom-sheet ref="myBottomSheet">
    <q-card>
      <q-card-section>
        <div class=" row justify-between text-h6">
          <span>Explanation</span>
          <q-btn side round flat outlined v-close-popup icon="close"/>
        </div>

      </q-card-section>

      <q-separator/>

      <q-card-section style="max-height: 50vh" class="scroll">
        <p class="text-weight-bold">Answer : {{ $props.answer }}</p>
        <p>{{ $props.explanation }}</p>
      </q-card-section>
    </q-card>
  </vue-bottom-sheet>
</template>

<script setup lang="ts">
import VueBottomSheet from '@webzlodimir/vue-bottom-sheet';
import '@webzlodimir/vue-bottom-sheet/dist/style.css';
import { ref } from 'vue';

const myBottomSheet = ref<InstanceType<typeof VueBottomSheet>>();

const props = defineProps<{ answer: string, explanation: string }>();

const open = () => {
  myBottomSheet.value.open();
};

const close = () => {
  myBottomSheet.value.close();
};
</script>
