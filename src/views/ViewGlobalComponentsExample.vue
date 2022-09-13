<template>
  <JsonToVue :content="cmsContent" />
</template>

<script setup>
import { JsonToVue } from 'json-to-vue' // TODO: change for testing
// import { JsonToVue } from '/lib/main' // TODO: change for testing
import { ref } from 'vue'
// import { getCurrentInstance } from 'vue'
// import MyGlobalFoo from '@/components/MyGlobalFoo.vue'
// import MyGlobalBar from '@/components/MyGlobalBar.vue'
import { useCms } from '@/composables'

// const { appContext } = getCurrentInstance()
// if (!('MyGlobalFoo' in appContext.components)) {
//   appContext.app.component('MyGlobalFoo', MyGlobalFoo)
// }
// if (!('MyGlobalBar' in appContext.components)) {
//   appContext.app.component('MyGlobalBar', MyGlobalBar)
// }
// console.log(appContext.components)

const { getContent } = useCms()
const cmsContent = ref(getContent('global'))

</script>
