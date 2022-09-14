<template>
  <div>
    <JsonToVue :content="cms.cms1" />
    <hr class="w-full my-4">
    <JsonToVue :content="cms.cms2" />
    <hr class="w-full my-4">
    <JsonToVue :content="cms.cms3" />
    <hr class="w-full my-4">
    <JsonToVue :content="cms.cms4" />
    <hr class="w-full my-4">
    <JsonToVue :content="cms.cms5" />
    <hr class="w-full my-4">
    <JsonToVue :content="cms.cms6" />
    <hr class="w-full my-4">
    <JsonToVue :content="cms.cms7" />
    <hr class="w-full my-4">
    <JsonToVue :content="cms.cms8" />
    <hr class="w-full my-4">
    <JsonToVue :content="cms.cms9" />
    <hr class="w-full my-4">
    <JsonToVue :content="cms.cms10" />
  </div>
</template>

<script setup>
import { JsonToVue } from 'json-to-vue'
import { ref } from 'vue'
import data from '/src/assets/json/data.json'

const cms = ref(data)

</script>
