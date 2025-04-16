<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h1 class="text-3xl font-bold mb-4 md:mb-0">Explore Cocktails</h1>
        
        <div class="w-full md:w-1/3">
          <SearchBar @search="handleSearch" />
        </div>
      </div>
      
      <!-- Filters -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-8">
        <div class="flex flex-wrap gap-4">
          <div class="w-full md:w-auto">
            <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select v-model="filters.category" class="input py-2">
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </div>
          
          <div class="w-full md:w-auto">
            <label class="block text-sm font-medium text-gray-700 mb-1">Base Spirit</label>
            <select v-model="filters.spirit" class="input py-2">
              <option value="">All Spirits</option>
              <option v-for="spirit in spirits" :key="spirit" :value="spirit">{{ spirit }}</option>
            </select>
          </div>
          
          <div class="w-full md:w-auto">
            <label class="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
            <select v-model="filters.difficulty" class="input py-2">
              <option value="">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          
          <div class="w-full md:w-auto">
            <label class="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <select v-model="filters.time" class="input py-2">
              <option value="">Any Time</option>
              <option value="5">5 minutes or less</option>
              <option value="10">10 minutes or less</option>
              <option value="15">15 minutes or less</option>
            </select>
          </div>
          
          <div class="w-full md:w-auto flex items-end">
            <button @click="resetFilters" class="btn bg-gray-100 text-gray-700 hover:bg-gray-200">
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      
      <!-- Results -->
      <div v-if="filteredCocktails.length > 0">
        <CocktailGrid :cocktails="filteredCocktails" />
        
        <!-- Pagination -->
        <div class="mt-10 flex justify-center">
          <nav class="flex items-center space-x-2">
            <button class="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 bg-primary text-white">1</button>
            <button class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">2</button>
            <button class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">3</button>
            
            <button class="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
      
      <!-- No Results -->
      <div v-else class="bg-white rounded-xl shadow-md p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-semibold mb-2">No cocktails found</h3>
        <p class="text-gray-500 mb-6">Try adjusting your filters or search for something else.</p>
        <button @click="resetFilters" class="btn btn-primary">
          Reset Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCocktailStore } from '~/stores/cocktails';

const cocktailStore = useCocktailStore();
const allCocktails = computed(() => cocktailStore.getAllCocktails);

const searchQuery = ref('');
const filters = ref({
  category: '',
  spirit: '',
  difficulty: '',
  time: ''
});

const categories = ['Classic', 'Tropical', 'Refreshing', 'Strong', 'Fruity', 'Bitter', 'Citrus', 'Spicy'];
const spirits = ['Vodka', 'Gin', 'Rum', 'Tequila', 'Whiskey', 'Bourbon', 'Brandy'];

const handleSearch = (query) => {
  searchQuery.value = query;
};

const resetFilters = () => {
  filters.value = {
    category: '',
    spirit: '',
    difficulty: '',
    time: ''
  };
  searchQuery.value = '';
};

const filteredCocktails = computed(() => {
  let result = [...allCocktails.value];
  
  // Apply search query
  if (searchQuery.value) {
    result = cocktailStore.searchCocktails(searchQuery.value);
  }
  
  // Apply category filter
  if (filters.value.category) {
    result = result.filter(cocktail => cocktail.category === filters.value.category);
  }
  
  // Apply spirit filter
  if (filters.value.spirit) {
    result = result.filter(cocktail => 
      cocktail.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(filters.value.spirit.toLowerCase())
      )
    );
  }
  
  // Apply time filter
  if (filters.value.time) {
    const maxTime = parseInt(filters.value.time);
    result = result.filter(cocktail => cocktail.time <= maxTime);
  }
  
  return result;
});
</script>