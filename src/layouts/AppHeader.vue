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
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el v-bind:key="index" v-for="(breadcrumb, index) in appStore.breadcrumb"
                            class="text-dark" :label="breadcrumb.display"
                            :to="breadcrumb.to"/>
        </q-breadcrumbs>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

</template>
