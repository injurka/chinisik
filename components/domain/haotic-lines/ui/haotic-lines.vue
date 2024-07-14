<script lang="ts" setup>
import { type P5I, p5i } from 'p5i'

interface Props {
  width: number
  height: number
  scaleFactor?: number
  pointsCounts?: number
  speed?: number
  weightStroke?: number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  scaleFactor: 1.1,
  pointsCounts: 8,
  speed: 1.5,
  weightStroke: 10,
  color: '--bg-accent-overlay-color',
})

const haoticLineEl = ref<HTMLElement>()
const haoticLineCanavas = ref<P5I>()

function createHaoticLines(el: HTMLElement) {
  const sketch = p5i(() => {
    const {
      width: widthEl,
      height: heightEl,
      speed,
      pointsCounts,
      scaleFactor,
      weightStroke,
      color,
    } = props

    const points: { x: number, y: number, dx: number, dy: number }[] = []

    return {
      setup({ createCanvas, random, height, WEBGL }) {
        const canvas = createCanvas(widthEl, heightEl, WEBGL)
        canvas.parent(el)

        const step = (widthEl * scaleFactor) / (pointsCounts - 1)

        for (let i = 0; i < pointsCounts; i++) {
          points.push({
            x: i * step - (widthEl * scaleFactor) / 2,
            y: random(-height, height * 2),
            dx: random(-speed, speed),
            dy: random(-speed, speed),
          })
        }
      },
      draw({
        background,
        beginShape,
        vertex,
        endShape,
        width,
        height,
        CLOSE,
        dist,
        ellipse,
        noFill,
        stroke,
        strokeWeight,
      }) {
        background(0, 0)
        strokeWeight(weightStroke)
        stroke(getComputedStyle(document.documentElement).getPropertyValue(color))
        noFill()

        beginShape()
        for (const point of points) {
          vertex(point.x, point.y)
          point.x += point.dx
          point.y += point.dy

          if (point.x < -width / 2 || point.x > width / 2)
            point.dx = -point.dx
          if (point.y < -height || point.y > height * 2)
            point.dy = -point.dy
        }
        endShape(CLOSE)

        checkIntersection()

        function checkIntersection() {
          for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
              if (dist(points[i].x, points[i].y, points[j].x, points[j].y) < 10) {
                ellipse(points[i].x, points[i].y, 10, 10)
              }
            }
          }
        }
      },
    }
  })

  sketch.mount(el)
  return sketch
}

function createSketchs() {
  nextTick(() => {
    haoticLineCanavas.value?.remove?.()
    haoticLineCanavas.value = createHaoticLines(haoticLineEl.value!)
  })
}

onMounted(() => {
  createSketchs()

  window.addEventListener('resize', () => {
    try {
      createSketchs()
    }
    catch (err) {
      console.error(err)
    }
  })
})
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
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: blur(30px);
  z-index: 5;
}
</style>
