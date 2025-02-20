<script setup lang="ts">
import { createMarkdownRenderer } from '../lib'

interface Props {
  content: string
}

const props = defineProps<Props>()
const renderedContent = ref('')

const md = createMarkdownRenderer()

watch(() => props.content, (newContent) => {
  renderedContent.value = md.render(newContent || '')
}, { immediate: true })
</script>

<template>
  <div class="markdown-body" v-html="renderedContent" />
</template>

<style lang="scss">
.markdown-body {
  padding: 0;
  background-color: transparent;
  color: var(--fg-primary-color);

  em {
    color: var(--fg-accent-color);
  }

  ul {
    list-style-type: disc;

    ::marker {
      color: var(--bg-overlay-secondary-color);
    }
  }

  pre {
    background: var(--bg-tertiary-color);
    color: var(--fg-primary-color);
    font-style: italic;
    padding-left: 16px;
    margin-top: 32px;
    margin-bottom: 8px;
    opacity: 0.5;
  }

  blockquote {
    border-left: 2px solid var(--border-accent-color);

    ol {
      margin-left: 32px;
      color: var(--fg-secondary-color);
      font-size: 0.9rem;
    }
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    padding: 4px;
    border-radius: 16px;
    overflow: hidden;
  }
}

:root {
  --line-height-tight: 1;
  --callout-border-width: 0px;
  --callout-border-opacity: 0.25;
  --callout-padding: 6px 6px 6px 12px;
  --callout-radius: 4px;
  --callout-title-color: inherit;
  --callout-title-padding: 0;
  --callout-title-size: inherit;
  --callout-title-weight: 500;
  --callout-content-padding: 0;
  --callout-content-background: transparent;
  --callout-blend-mode: var(darken);
  --callout-info: 8, 109, 221;
  --callout-todo: 8, 109, 221;
  --callout-default: 8, 109, 221;
  --callout-bug: 233, 49, 71;
  --callout-error: 233, 49, 71;
  --callout-fail: 233, 49, 71;
  --callout-success: 8, 185, 78;
  --callout-example: 120, 82, 238;
  --callout-important: 0, 191, 188;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-question: 236, 117, 0;
  --callout-warning: 236, 117, 0;
  --callout-quote: 158, 158, 158;
  --callout-collapse-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTkgMThsNi02bC02LTYiLz48L3N2Zz4=');
}

.theme-light {
  --callout-blend-mode: var(darken);
}

.theme-dark {
  --callout-blend-mode: var(lighten);
}

html[data-theme='light'] #app {
  --callout-blend-mode: var(darken);
}

html[data-theme='dark'] #app {
  --callout-blend-mode: var(lighten);
}

/**
 * Obsidian callout about
 *
 * The following style is exactly the same as in obsidian
 */
.callout {
  overflow: hidden;
  border-style: solid;
  border-color: rgba(var(--callout-color), var(--callout-border-opacity));
  border-width: var(--callout-border-width);
  border-radius: var(--callout-radius);
  margin-bottom: 16px;
  mix-blend-mode: var(--callout-blend-mode);
  background-color: rgba(var(--callout-color), 0.1);
  padding: var(--callout-padding);
  --callout-color: var(--callout-default);
  --callout-icon: lucide-pencil;
}

.callout .callout-title {
  padding: var(--callout-title-padding);
  display: flex;
  justify-content: space-between;
  gap: 4px;
  font-size: var(--callout-title-size);
  color: rgb(var(--callout-color));
  line-height: var(--line-height-tight);
  align-items: center;
}

details.callout .callout-title {
  margin: 0;
  cursor: pointer;
  font-size: 0.85rem;
}

.callout .callout-title .callout-title-icon {
  display: none;
}

.callout .callout-title .callout-title-inner {
  --font-weight: var(--callout-title-weight);
  font-weight: var(--font-weight);
  color: var(--callout-title-color);
}

.callout .callout-title .callout-fold {
  background-color: rgb(var(--callout-color));
  mask-image: var(--callout-collapse-icon);
  mask-size: 100%;
  -webkit-mask-image: var(--callout-collapse-icon);
  -webkit-mask-size: 100%;
  height: 24px;
  width: 24px;
  transition: 100ms ease-in-out;
}

details[close].callout > .callout-title > .callout-fold {
  transform: rotate(-90deg);
}

details[open].callout > .callout-title > .callout-fold {
  transform: rotate(90deg);
}

.callout .callout-content {
  overflow-x: auto;
  padding: var(--callout-content-padding);
  background-color: var(--callout-content-background);
}

.callout[data-callout='todo'] {
  --callout-color: var(--callout-todo);
  --callout-icon: lucide-check-circle-2;
}

.callout[data-callout='success'],
.callout[data-callout='check'],
.callout[data-callout='done'] {
  --callout-color: var(--callout-success);
  --callout-icon: lucide-check;
}

.callout[data-callout='warning'],
.callout[data-callout='caution'],
.callout[data-callout='attention'] {
  --callout-color: var(--callout-warning);
  --callout-icon: lucide-alert-triangle;
}

.callout[data-callout='danger'],
.callout[data-callout='error'] {
  --callout-color: var(--callout-error);
  --callout-icon: lucide-zap;
}

.callout[data-callout='tip'],
.callout[data-callout='hint'] {
  --callout-color: var(--callout-tip);
  --callout-icon: lucide-flame;
}

.callout[data-callout='example'] {
  --callout-color: var(--callout-example);
  --callout-icon: lucide-list;
}

.callout[data-callout='abstract'],
.callout[data-callout='summary'],
.callout[data-callout='tldr'] {
  --callout-color: var(--callout-summary);
  --callout-icon: lucide-clipboard-list;
}

.callout[data-callout='quote'],
.callout[data-callout='cite'] {
  --callout-color: var(--callout-quote);
  --callout-icon: quote-glyph;
}
</style>
