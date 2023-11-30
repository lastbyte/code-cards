<template>
  <q-layout view="lHh Lpr lFf" class="q-px-md">
    <app-header/>
    <app-drawer/>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import AppDrawer from 'layouts/AppDrawer.vue';
import AppHeader from 'layouts/AppHeader.vue';
</script>
