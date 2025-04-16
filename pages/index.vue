<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary to-secondary py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Discover Your Perfect Cocktail</h1>
            <p class="text-white text-lg mb-8">Explore hundreds of cocktail recipes and find your new favorite drink. From classics to creative concoctions.</p>
            
            <div class="max-w-md">
              <SearchBar @search="handleSearch" />
            </div>
            
            <div class="mt-8 flex flex-wrap gap-4">
              <button 
                v-for="category in categories" 
                :key="category"
                class="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-colors"
              >
                {{ category }}
              </button>
            </div>
          </div>
          
          <div class="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Cocktail collection" 
              class="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Cocktails -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold">Nos recommandation</h2>
          <NuxtLink to="/explore" class="text-primary hover:text-primary-dark font-medium">
            View All
          </NuxtLink>
        </div>
        
        <CocktailGrid :cocktails="featuredCocktails" />
      </div>
    </section>
    
    <!-- AI Suggestion -->
    <section class="py-16 bg-light-dark">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-2/3">
            <h2 class="text-3xl font-bold mb-6">Personalized Recommendations</h2>
            <p class="text-lg mb-8">Our AI analyzes your preferences to suggest cocktails you'll love. Discover new flavors and expand your mixology horizons.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div v-for="(feature, index) in features" :key="index" class="flex">
                <div class="mr-4 p-2 bg-secondary rounded-full h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="md:w-1/3">
            <AiSuggestion :suggestion="aiSuggestion" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Popular Categories -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            v-for="(category, index) in popularCategories" 
            :key="index"
            class="relative rounded-lg overflow-hidden group cursor-pointer"
          >
            <img 
              :src="category.image" 
              :alt="category.name" 
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
            <div class="absolute bottom-0 left-0 p-4">
              <h3 class="text-xl font-bold text-white">{{ category.name }}</h3>
              <p class="text-white text-sm">{{ category.count }} cocktails</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCocktailStore } from '~/stores/cocktails';

const cocktailStore = useCocktailStore();
const featuredCocktails = computed(() => cocktailStore.getAllCocktails.slice(0, 4));
const aiSuggestion = computed(() => cocktailStore.getAiSuggestion);

const categories = ['Popular', 'Classic', 'Tropical', 'Refreshing', 'Strong', 'Non-Alcoholic'];

const features = [
  {
    title: 'Taste Analysis',
    description: 'Our AI learns your flavor preferences to suggest cocktails you\'ll love.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  },
  {
    title: 'Ingredient Matching',
    description: 'Find cocktails that match the ingredients you already have at home.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    title: 'Seasonal Suggestions',
    description: 'Get recommendations based on season, weather, and current trends.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  },
  {
    title: 'Personalized History',
    description: 'Your cocktail journey evolves as you explore and rate different drinks.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  }
];

const popularCategories = [
  { name: 'Classics', count: 42, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Tropical', count: 28, image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Martinis', count: 16, image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Non-Alcoholic', count: 23, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
];

const handleSearch = (query) => {
  // Handle search logic
  console.log('Searching for:', query);
};
</script>