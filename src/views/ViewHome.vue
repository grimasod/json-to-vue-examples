<template>
  <div>
    <JsonToVue :content="examples.home1" />
    <hr class="w-full my-4">
    <JsonToVue :content="examples.home2" />
    <hr class="w-full my-4">
    <JsonToVue :content="examples.home3" />
    <hr class="w-full my-4">
    <JsonToVue :content="examples.home4" />
    <hr class="w-full my-4">
    <JsonToVue :content="examples.home5" />
    <hr class="w-full my-4">
    <JsonToVue :content="examples.home6" />
    <hr class="w-full my-4">
    <JsonToVue :content="examples.home7" />
    <hr class="w-full my-4">
    <JsonToVue :content="examples.home8" />
    <hr class="w-full my-4">
    <JsonToVue :content="examples.home9" />
    <hr class="w-full my-4">
    <JsonToVue :content="examples.home10" />
  </div>
</template>

<script setup>
import { JsonToVue } from 'json-to-vue'
import { ref } from 'vue'
import { useCms } from '@/composables'

const { getContent } = useCms()
const examples = ref(getContent('examples'))

</script>
