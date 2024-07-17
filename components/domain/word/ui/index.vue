<script lang="ts" setup>
// interface Props {
//   pinyin: string
//   toneIndex: number
//   toneType: ToneType
//   colored?: boolean
// }

// defineProps<Props>()

// const hieroglyphMock: HieroglyphKey[] = [{
//   toneType: 1,
//   toneIndex: 1,
//   pinyin: 'bing',
//   glyph: '冫',
//   translate: 'лед',
// }, {
//   toneType: 1,
//   toneIndex: 1,
//   pinyin: 'bing',
//   glyph: '冫',
//   translate: 'лед',
// }, {
//   toneType: 1,
//   toneIndex: 1,
//   pinyin: 'bing',
//   glyph: '冫',
//   translate: 'лед',
// }, {
//   toneType: 1,
//   toneIndex: 1,
//   pinyin: 'bing',
//   glyph: '冫',
//   translate: 'лед',
// }]

const variant = ref<number>(1)

function changeVariant(value: number) {
  variant.value = value
}
</script>

<template>
  <div>
    <div class="btns">
      <button @click="changeVariant(1)">
        Type 1
      </button>
      <button @click="changeVariant(2)">
        Type 2
      </button>
      <button @click="changeVariant(3)">
        Type 3
      </button>
      <button @click="changeVariant(4)">
        Type 4
      </button>
      <button @click="changeVariant(5)">
        Type 5
      </button>
    </div>

    <div :class="[`type-${variant}`]" class="word">
      <div class="pinyin">
        kāngxī zìdiǎn
      </div>
      <div class="hieroglyph">
        康熙字典
      </div>
      <div class="translate" v>
        Словарь канси
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.type-1 {
  display: inline-block;
}
.type-2 {
  display: inline-flex;
  gap: 10px;
}
.type-3 {
  margin: 0 5px;
}
.type-4 {
  display: inline-flex;
  flex-direction: column;
  border-radius: 10px;
  padding-left: 0px;

  .pinyin {
    text-align: center;
    padding: 5px 10px;
  }

  .hieroglyph {
    font-size: 1.2rem;
    text-align: center;
    border-radius: 0px;
    border: none;
    border-top: 1px solid var(--border-accent-color);
    border-bottom: 1px solid var(--border-accent-color);
  }

  .translate {
    text-align: center;
    padding: 5px 10px;
  }
}

.btns {
  display: flex;
  gap: 32px;
  margin-bottom: 100px;
}

.word {
  font-size: 1rem;
  margin: 4px 0;
}

.pinyin {
  color: var(--fg-primary-color);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.hieroglyph {
  letter-spacing: 2px;
  padding: 1px 4px;
  border-radius: 5px;
  background: var(--bg-accent-brand-color);
  border: 1px solid var(--border-accent-color);
  color: var(--fg-primary-color);
  color: wheat;
}

.translate {
  color: var(--fg-primary-color);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.2px;
}
</style>
