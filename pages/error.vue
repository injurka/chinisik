<script setup lang="ts">

</script>

<template>
  <div>
    <div class="zigzag-divider" />
  </div>
</template>

<style scoped lang="scss">
.zigzag-divider {
  height: 10px;
  position: relative;
  overflow: hidden;
}

.zigzag-divider::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(45deg, transparent 33%, #3a383f 33%, #3a383f 66%, transparent 66%),
    linear-gradient(-45deg, transparent 33%, #3a383f 33%, #3a383f 66%, transparent 66%);
  background-size: 10px 10px;
}
</style>
