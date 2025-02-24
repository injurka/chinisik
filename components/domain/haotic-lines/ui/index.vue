<!-- eslint-disable unused-imports/no-unused-vars -->
<script lang="ts" setup>
import { type P5I, p5i } from 'p5i'

interface Props {
  width?: number
  height?: number
  scaleFactor?: number
  pointsCounts?: number
  speed?: number
  weightStroke?: number
  color?: string
  cap?: boolean
  viewportEl?: HTMLElement | null
}

const props = withDefaults(defineProps<Props>(), {
  width: 0,
  height: 0,
  scaleFactor: 1.1,
  pointsCounts: 8,
  speed: 1.5,
  weightStroke: 10,
  color: '--bg-accent-overlay-color',
  cap: true,
  viewportEl: null,
})

const haoticLineEl = ref<HTMLElement>()
// const haoticLineCanavas = ref<P5I>()
// const viewport = computed(() => ({
//   width: props.viewportEl?.offsetWidth || props.width,
//   height: props.viewportEl?.offsetHeight || props.height,
// }))

// function createHaoticLines(el: HTMLElement) {
//   const sketch = p5i(() => {
//     const {
//       speed,
//       pointsCounts,
//       scaleFactor,
//       weightStroke,
//       color,
//     } = props

//     const {
//       width: widthEl,
//       height: heightEl,
//     } = viewport.value

//     const points: { x: number, y: number, dx: number, dy: number }[] = []

//     return {
//       setup({ createCanvas, random, WEBGL }) {
//         const canvas = createCanvas(widthEl, heightEl, WEBGL)
//         canvas.parent(el)

//         const step = (widthEl * 1) / (pointsCounts - 1)

//         const scalefactorX = scaleFactor * Math.max((heightEl / widthEl), 1)
//         const scalefactorY = scaleFactor * Math.max((widthEl / heightEl), 1)

//         for (let i = 0; i < pointsCounts; i++) {
//           points.push({
//             x: i * step - (widthEl * scalefactorX) / 2,
//             y: random(-(heightEl / 2) * scalefactorY, (heightEl / 2) * scalefactorY),
//             dx: random(-speed, speed),
//             dy: random(-speed, speed),
//           })
//         }
//       },
//       draw({
//         background,
//         beginShape,
//         vertex,
//         endShape,
//         width,
//         height,
//         CLOSE,
//         dist,
//         ellipse,
//         noFill,
//         stroke,
//         strokeWeight,
//       }) {
//         background(0, 0)
//         strokeWeight(weightStroke)
//         stroke(getComputedStyle(document.documentElement).getPropertyValue(color))
//         noFill()

//         beginShape()
//         for (const point of points) {
//           vertex(point.x, point.y)
//           point.x += point.dx
//           point.y += point.dy

//           if (point.x < -width / 2 || point.x > width / 2)
//             point.dx = -point.dx
//           if (point.y < -height / 2 || point.y > height / 2)
//             point.dy = -point.dy
//         }
//         endShape(props.cap ? CLOSE : undefined)

//         checkIntersection()

//         function checkIntersection() {
//           for (let i = 0; i < points.length; i++) {
//             for (let j = i + 1; j < points.length; j++) {
//               if (dist(points[i].x, points[i].y, points[j].x, points[j].y) < 10) {
//                 ellipse(points[i].x, points[i].y, 10, 10)
//               }
//             }
//           }
//         }
//       },
//     }
//   })

//   sketch.mount(el)
//   return sketch
// }

// function createSketchs() {
//   nextTick(() => {
//     haoticLineCanavas.value?.remove?.()
//     haoticLineCanavas.value = createHaoticLines(haoticLineEl.value!)
//   })
// }

// function resizeListener() {
//   try {
//     createSketchs()
//   }
//   catch (err) {
//     console.error(err)
//   }
// }

// onMounted(() => {
//   createSketchs()
//   window.addEventListener('resize', resizeListener)
// })

// onUnmounted(() => {
//   window.removeEventListener('resize', resizeListener)
//   haoticLineCanavas.value?.remove()
// })
</script>

<template>
  <div
    ref="haoticLineEl"
    class="haotic-line"
  />
</template>

<style lang="scss" scoped>
.haotic-line {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: blur(30px);
  z-index: 5;
}
</style>
