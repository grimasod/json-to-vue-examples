<template>
  <div class="w-full min-h-screen p-10 flex flex-col items-center">
    <JsonToVue :content="menu" />
    <router-view />
  </div>
</template>

<script setup>
import { JsonToVue } from 'json-to-vue'
// import { JsonToVue } from '/devlib/main.js'
import { ref } from 'vue'
 
const menu = ref([
  {
    attributes: {
      class: 'flex gap-4 mb-10',
    },
    children: [
      {
        component: 'router-link',
        attributes: {
          to: { name: 'home' },
          class: 'border rounded px-4 py-2 bg-gray-50'
        },
        children: [
          'Home'
        ]
      },
      {
        component: 'router-link',
        attributes: {
          to: { name: 'global-components' },
          class: 'border rounded px-4 py-2 bg-gray-50'
        },
        children: [
          'Global'
        ]
      },
      {
        component: 'router-link',
        attributes: {
          to: { name: 'composable' },
          class: 'border rounded px-4 py-2 bg-gray-50'
        },
        children: [
          'Composables'
        ]
      },
      {
        component: 'router-link',
        attributes: {
          to: { name: 'dynamic-imports' },
          class: 'border rounded px-4 py-2 bg-gray-50'
        },
        children: [
          'Dynamically imported components'
        ]
      }
    ]
  }
])
 
</script>
