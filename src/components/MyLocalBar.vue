<template>
  <div class="p-6 mt-4 bg-black text-white">
    Locally imported Bar component with a tagline:
    <h2 v-if="tagline" class="font-bold text-lg">{{ tagline }}</h2>
    <div class="p-2 bg-gray-800">
      The default slot:
      <slot />
    </div>
    <div class="p-2 bg-gray-700">
      The <span class="bg-gray-50 text-gray-600 px-1 rounded">bar</span> slot:
      <slot name="bar" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  tagline: {
    type: String,
    default: ''
  }
})
</script>
