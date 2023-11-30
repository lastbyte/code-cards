<template>
  <div v-html="markdown.render(source)" class="markdown"/>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownIt from 'markdown-it';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownItAbbr from 'markdown-it-abbr';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownItAnchor from 'markdown-it-anchor';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownItFootnote from 'markdown-it-footnote';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownItHighlightjs from 'markdown-it-highlightjs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownItSub from 'markdown-it-sub';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownItSup from 'markdown-it-sup';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownItTasklists from 'markdown-it-task-lists';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownItTOC from 'markdown-it-toc-done-right';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MarkdownItHTML from 'markdown-it-html';

const markdown = new MarkdownIt()
  .use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItFootnote)
  .use(MarkdownItHighlightjs)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTasklists)
  .use(MarkdownItTOC)
  .use(MarkdownItHTML);

defineProps({
  source: {
    type: String,
    default: '',
  },
});
</script>
<style>
.markdown p {
  margin: 0 0 0 0;
}
</style>
