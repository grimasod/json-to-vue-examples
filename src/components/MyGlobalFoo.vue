<template>
  <div class="p-6 mt-4 bg-white">
    Globally registered Foo component with the headline:
    <h2 v-if="headline" class="font-bold text-lg">{{ headline }}</h2>
    <div class="p-2 bg-gray-50">
      The default slot:
      <slot />
    </div>
    <div class="p-2 bg-gray-100">
      The <span class="bg-gray-300 px-1 rounded">other</span> slot:
      <slot name="other" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  headline: {
    type: String,
    default: ''
  }
})
</script>
