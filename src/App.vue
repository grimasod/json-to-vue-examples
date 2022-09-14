<template>
  <SiteHeader />
  <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center pt-20 pb-4 -z-10 pointer-events-none">
    <SvgCircle class="max-w-full max-h-full text-light" />
  </div>
  <div class="flex justify-center text-navy">
    <div class="w-full max-w-screen-md flex flex-col items-center px-4 py-10 lg:px-12">
      <h1 class="text-4xl font-bold">
        JSON to Vue
      </h1>
      <ul class="py-6">
        <li>
          Git:
          <a href="https://github.com/grimasod/json-to-vue" class="text-blue2 hover:text-blue">github.com/grimasod/json-to-vue</a>
        </li>
        <li>
          NPM:
          <a href="https://www.npmjs.com/package/json-to-vue" class="text-blue2 hover:text-blue">npmjs.com/package/json-to-vue</a>
        </li>
      </ul>
      <JsonToVue :content="menu" />
      <router-view class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { JsonToVue } from 'json-to-vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SvgCircle from '@/components/SvgCircle.vue'
import { useCms } from '@/composables'
 
import { useIcon } from '@/composables'

const { getIcon } = useIcon()
const rightIcon = getIcon('right')

const { getContent } = useCms()
const menuOriginal = getContent('menu')

const menu = computed(() => [{
  element: 'nav',
  attributes: {
    class: 'flex flex-col mb-10'
  },
  children: menuOriginal.main.map(item => ({
    component: 'router-link',
    attributes: {
      to: { name: item.page },
      class: 'text-orange py-1 underline'
    },
    children: [
      rightIcon,
      item.label
    ]
  }))
}])
</script>
