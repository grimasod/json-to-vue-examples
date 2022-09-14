<template>
  <div>
    <JsonToVue :content="cmsContent" />
  </div>
</template>

<script setup>
import { JsonToVue } from 'json-to-vue'
import { ref } from 'vue'
import { useCms } from '@/composables'

const { getContent } = useCms()
const cmsContent = ref([getContent('global')])

</script>
