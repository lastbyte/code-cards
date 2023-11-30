<script setup lang="ts">

import { useAppStore } from 'stores/app-store';

const appStore = useAppStore();
</script>

<template>
  <q-header elevated class="bg-yellow text-dark">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="() => {appStore.toggleDrawer() ; console.log('clicked')}"
      />

      <q-toolbar-title class="row items-center">
        <span class="brand text-weight-medium">Cards</span>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

</template>
