<template>
  <SiteHeader />
  <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center pt-20 pb-4 -z-10 pointer-events-none">
    <SvgCircle class="max-w-full max-h-full text-light" />
  </div>
  <div class="flex justify-center text-navy">
    <div class="w-full max-w-screen-md flex flex-col items-center px-4 py-10 lg:px-12">
      <JsonToVue :content="menu" />
      <router-view class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { JsonToVue } from 'json-to-vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SvgCircle from '@/components/SvgCircle.vue'
 
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
          class: 'border border-orange text-orange rounded px-4 py-2 bg-gray4'
        },
        children: [
          'Home'
        ]
      },
      {
        component: 'router-link',
        attributes: {
          to: { name: 'global-components' },
          class: 'border border-orange text-orange rounded px-4 py-2 bg-gray4'
        },
        children: [
          'Global'
        ]
      },
      {
        component: 'router-link',
        attributes: {
          to: { name: 'composable' },
          class: 'border border-orange text-orange rounded px-4 py-2 bg-gray4'
        },
        children: [
          'Composables'
        ]
      },
      {
        component: 'router-link',
        attributes: {
          to: { name: 'dynamic-imports' },
          class: 'border border-orange text-orange rounded px-4 py-2 bg-gray4'
        },
        children: [
          'Dynamically imported components'
        ]
      }
    ]
  }
])
 
</script>
