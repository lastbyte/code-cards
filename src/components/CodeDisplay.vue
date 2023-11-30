<script setup lang="ts">
defineProps<{ code: string }>();
</script>

<template>
  <pre v-highlightjs auto class="hljs-pre full-width">
    <code class="relative-position snippet
     rounded-borders font-fira-code javascript full-width">
      {{ $props.code }}
    </code>
  </pre>
</template>
<style scoped>
.hljs-pre, .snippet {
  white-space: pre-wrap;
  border-radius: 1rem;
}

.hljs {
  padding: 0.5em 2em;
  border-radius: 2rem;
}
</style>
