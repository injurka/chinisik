<script lang="ts" setup>
import KeyHieroglyphPracticeDraw from './keys-practice-draw/keys-practice-draw.vue'
import KeyHieroglyphPracticeQuize from './keys-practice-quize/key-practice-quize.vue'

interface Props {
  items: HieroglyphKey[]
}

type Mode = 'quize' | 'draw'

defineProps<Props>()

const isFullscreen = ref<boolean>(false)
const mode = ref<Mode>('quize')

function handleChangeMode(value: Mode) {
  mode.value = value
}
</script>

<template>
  <div class="practice">
    <div class="practice-content">
      <KeyHieroglyphPracticeQuize
        v-if="mode === 'quize'"
        v-model:fullscreen="isFullscreen"
        :items="items"
      />
      <KeyHieroglyphPracticeDraw
        v-if="mode === 'draw'"
        v-model:fullscreen="isFullscreen"
        :items="items"
      />
    </div>

    <v-tooltip
      v-if="mode === 'quize'"
      location="top"
      text="Перейти в режим рисования иероглифов"
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          class="practice-button-mode"
          rounded
          variant="tonal"
          @click="handleChangeMode('draw')"
        >
          <span>Рисование</span>
          <v-icon>mdi-draw</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-tooltip
      v-if="mode === 'draw'"
      location="top"
      text="Перейти в режим квиза"
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          class="practice-button-mode"
          rounded
          variant="tonal"
          @click="handleChangeMode('quize')"
        >
          <span>Квиз</span>
          <v-icon>mdi-draw</v-icon>
        </v-btn>
      </template>
    </v-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.practice {
  max-width: 1200px;
  margin: 0 auto;

  &-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 600px;

    @include mobile {
      min-height: auto;
    }
  }

  &-button-mode {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    text-transform: none;
    text-decoration: none;
    letter-spacing: 1px;
    color: var(--fg-secondary-color);
    width: auto;
    margin: 0 auto;
    padding: 0 32px;
    margin-top: 64px;

    &:hover {
      opacity: 1;
    }

    :first-of-type {
      margin-right: 8px;
    }

    @include mobile {
      font-size: 0.75rem;
    }
  }
}
</style>
