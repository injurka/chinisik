<script lang="ts" setup>
// import { Word } from '~/components/domain/word'

// const variant = ref<number>(1)

// function changeVariant(value: number) {
//   variant.value = value
// }

// interface Ref<T> {
//   value: T
// }

// function ref<T>(value: T): Ref<T> {
//   const wrapper: Ref<T> = {
//     value,
//   }

//   return new Proxy(wrapper, {
//     get(target, key) {
//       if (key === 'value') {
//         // Здесь могла бы быть логика отслеживания зависимостей
//         // track(target, 'value');
//         console.log('Getting value')
//       }
//       return target[key as keyof Ref<T>]
//     },
//     set(target, key, newValue) {
//       if (key === 'value') {
//         // Здесь могла бы быть логика уведомления об изменениях
//         // trigger(target, 'value');
//         console.log('Setting value', newValue)
//         target[key as keyof Ref<T>] = newValue
//       }
//       return true
//     },
//   })
// }

// // Пример использования
// const count = ref(0)
// console.log(count.value) // Вывод: Getting value, 0
// count.value = 1 // Вывод: Setting value
// console.log(count.value) // Вывод: Getting value, 1

type Effect = () => void

let activeEffect: Effect | null = null
const effectStack: Effect[] = []
const targetMap = new WeakMap<Ref<any>, Map<string, Set<Effect>>>()

function watchEffect(effect: Effect) {
  const wrappedEffect = () => {
    try {
      activeEffect = effect
      effectStack.push(effect)
      effect()
    }
    finally {
      effectStack.pop()
      activeEffect = effectStack[effectStack.length - 1] || null
    }
  }
  wrappedEffect()
}

const count = ref(0)

function watch<T>(source: Ref<T>, callback: (newValue: T, oldValue: T) => void) {
  let oldValue: T = JSON.parse(JSON.stringify(source.value))

  const effect = () => {
    const newValue: T = JSON.parse(JSON.stringify(source.value))
    if (newValue !== oldValue) {
      callback(newValue, oldValue)
      oldValue = newValue
    }
  }

  watchEffect(effect)
}

watch(count, (newValue, oldValue) => {
  console.log('Count changed from', oldValue, 'to', newValue)
})

definePageMeta({ layout: 'base' })
</script>

<template>
  <div @click="count.value = Math.round(Math.random() * 100)">
    Count changed
  </div>
  <!-- <div>
    <div class="btns">
      <button @click="changeVariant(0)">
        Type 0
      </button>
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
    </div>
    <Word
      :variant="variant as any"
      glyph="康熙字典"
      pinyin="kāngxī zìdiǎn"
      translate="Словарь канси"
    />
  </div> -->
</template>

<style lang="scss" scoped>
.btns {
  margin: 32px 0;
  display: flex;
  gap: 16px;
}
</style>
