<template>
  <div>
    <MyCMSDynamic :content="cmsContent" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCms } from '@/composables'
import MyCMSDynamic from '@/components/MyCMSDynamic.js'

const { getContent } = useCms()
const cmsContent = ref([getContent('dynamic')])

</script>
