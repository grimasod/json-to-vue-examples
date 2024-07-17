<template>
  <div class="sticky top-0 left-0 right-0 bg-gray flex flex-col items-center text-blue z-10 bg-opacity-95">
    <div class="w-full max-w-screen-md h-16 px-2 flex justify-between items-center relative">
      <a href="https://example.com/" class="flex items-center z-10 px-2">
        <CircleLogoSpinner />
        <div class="flex items-baseline flex-col px-2 md:flex-row">
          <h1 class="text-2xl font-bold pl-2">
            Circle of Life Cycle
          </h1>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import CircleLogoSpinner from '@/components/CircleLogoSpinner.vue'
</script>
