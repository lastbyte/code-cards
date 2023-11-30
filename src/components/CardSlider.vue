<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Glide from '@glidejs/glide';

let glide: Glide | null = null;

onMounted(() => {
  glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
  });
  glide.mount();
});

onBeforeUnmount(() => {
  glide?.destroy();
});
</script>

<style scoped>
@import '@glidejs/glide/dist/css/glide.core.min.css';
</style>
