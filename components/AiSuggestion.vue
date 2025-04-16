<template>
  <div class="card bg-gradient-to-br from-secondary-light to-secondary p-0 overflow-hidden">
    <div class="p-6">
      <div class="flex items-center mb-4">
        <div class="p-2 bg-white rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white">AI Suggestion</h3>
      </div>
      
      <p class="text-white mb-4">Based on your preferences, try this unique cocktail:</p>
      
      <div class="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm mb-6">
        <h4 class="text-lg font-semibold text-white mb-2">{{ suggestion.name }}</h4>
        <p class="text-white text-sm mb-3">{{ suggestion.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="(ingredient, index) in suggestion.ingredients" :key="index" class="px-3 py-1 bg-white bg-opacity-30 rounded-full text-xs text-white">
            {{ ingredient }}
          </span>
        </div>
      </div>
      
      <button class="btn bg-white text-secondary hover:bg-gray-100 transition-colors w-full">
        Get Full Recipe
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  suggestion: {
    type: Object,
    required: true
  }
});
</script>