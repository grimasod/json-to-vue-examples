<template>
  <div>
    <MyCMS :content="cmsContent" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCms } from '@/composables'
import MyCMS from '@/components/MyCMS.js'

const { getContent } = useCms()
const cmsContent = ref([getContent('local')])

</script>
