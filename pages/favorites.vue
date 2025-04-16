<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-8">My Favorite Cocktails</h1>
      
      <div v-if="favoriteCocktails.length > 0">
        <CocktailGrid :cocktails="favoriteCocktails" />
      </div>
      
      <div v-else class="bg-white rounded-xl shadow-md p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <h3 class="text-xl font-semibold mb-2">No favorites yet</h3>
        <p class="text-gray-500 mb-6">Start exploring and add cocktails to your favorites.</p>
        <NuxtLink to="/explore" class="btn btn-primary">
          Explore Cocktails
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCocktailStore } from '~/stores/cocktails';

const cocktailStore = useCocktailStore();
const favoriteCocktails = computed(() => cocktailStore.getFavoriteCocktails);
</script>