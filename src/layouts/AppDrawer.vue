<script setup lang="ts">
import { useAppStore } from 'stores/app-store';
import { useQuasar } from 'quasar';
import { fabGithubSquare, fabLinkedinIn } from '@quasar/extras/fontawesome-v5';

const $q = useQuasar();
const appStore = useAppStore();
</script>

<template>
  <q-drawer
    v-model="appStore.drawer"
    show-if-above
    :width="300"
    :breakpoint="800"
    elevated
  >
    <q-scroll-area class="fit">
      <div class="window-height q-py-lg q-px-sm column col items-center gap-4">
        <div class="row">
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
        <div class="column col full-width justify-between items-center q-pt-xl">
          <span class="text-center">
            Heartfelt thanks to Lydia Hallie for her exceptional
            <a class="text-secondary"
               style="text-decoration: none !important;"
               href="https://github.com/lydiahallie/javascript-questions">JavaScript Questions</a>
            ,The github  repository that powers this website's content.
          </span>
          <div class="row full-width justify-center q-col-gutter-sm">
            <a style="text-decoration: none" href="https://github.com/lastbyte/code-cards">
              <q-icon size="sm" color="secondary" :name="fabGithubSquare"/>
            </a>
            <a style="text-decoration: none" href="https://www.linkedin.com/in/lastbyte/">
              <q-icon size="sm" color="secondary" :name="fabLinkedinIn"/>
            </a>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<style scoped>

</style>
