<script setup>
import {provide, shallowRef} from 'vue'
import router from './router'
import layouts from './layouts'

const layout = shallowRef(null)

router.afterEach((to) => {
  console.log('Moving to ', to)
  layout.value = layouts[to.meta.layout]
})

provide('app:layout', layout)
</script>

<template>
    <component :is="layout || 'div'">
      <RouterView />
    </component>

</template>

<style scoped>

</style>
