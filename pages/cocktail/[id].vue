<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div v-if="cocktail" class="flex flex-col lg:flex-row gap-10">
        <!-- Left Column - Image -->
        <div class="lg:w-1/2">
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              :src="cocktail.image" 
              :alt="cocktail.name" 
              class="w-full h-auto object-cover"
            />
            <button 
              @click="toggleFavorite"
              class="absolute top-4 right-4 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                :class="isFavorite ? 'text-primary' : 'text-gray-400'"
                fill="currentColor" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
            </button>
          </div>
          
          <div class="mt-8">
            <h3 class="text-xl font-semibold mb-4">Similar Cocktails</h3>
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="similar in similarCocktails" 
                :key="similar.id"
                class="relative rounded-lg overflow-hidden group cursor-pointer"
              >
                <NuxtLink :to="`/cocktail/${similar.id}`">
                  <img 
                    :src="similar.image" 
                    :alt="similar.name" 
                    class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
                  <div class="absolute bottom-0 left-0 p-3">
                    <h4 class="text-sm font-bold text-white">{{ similar.name }}</h4>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Details -->
        <div class="lg:w-1/2">
          <div class="flex items-center mb-2">
            <span class="px-3 py-1 bg-secondary text-white text-sm rounded-full">{{ cocktail.category }}</span>
            <div class="flex ml-4">
              <span v-for="i in 5" :key="i" class="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="i <= cocktail.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </span>
              <span class="text-sm text-gray-500 ml-1">({{ cocktail.reviews }})</span>
            </div>
          </div>
          
          <h1 class="text-4xl font-bold mb-4">{{ cocktail.name }}</h1>
          
          <div class="flex items-center text-gray-500 mb-6">
            <div class="flex items-center mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ cocktail.time }} min</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span>Difficulty: Medium</span>
            </div>
          </div>
          
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Ingredients</h2>
            <ul class="space-y-3">
              <li 
                v-for="(ingredient, index) in cocktail.ingredients" 
                :key="index"
                class="flex items-center"
              >
                <div class="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{{ ingredient }}</span>
              </li>
            </ul>
          </div>
          
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Instructions</h2>
            <ol class="space-y-4">
              <li 
                v-for="(step, index) in cocktail.instructions" 
                :key="index"
                class="flex"
              >
                <div class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center mr-3 flex-shrink-0">
                  <span class="text-white font-medium">{{ index + 1 }}</span>
                </div>
                <div class="pt-1">
                  <p>{{ step }}</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div class="flex space-x-4">
            <button class="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share Recipe
            </button>
            <button class="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Recipe
            </button>
          </div>
        </div>
      </div>
      
      <div v-else class="flex justify-center items-center h-64">
        <p class="text-xl">Loading cocktail details...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCocktailStore } from '~/stores/cocktails';

const route = useRoute();
const cocktailStore = useCocktailStore();

const cocktailId = computed(() => parseInt(route.params.id));
const cocktail = computed(() => cocktailStore.getCocktailById(cocktailId.value));

const isFavorite = ref(false);

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  cocktailStore.toggleFavorite(cocktailId.value);
};

// Get similar cocktails (in a real app, this would be based on category or ingredients)
const similarCocktails = computed(() => {
  return cocktailStore.getAllCocktails
    .filter(c => c.id !== cocktailId.value && c.category === cocktail.value?.category)
    .slice(0, 4);
});
</script>