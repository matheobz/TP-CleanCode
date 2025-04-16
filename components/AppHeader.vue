<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center">
          <span class="text-2xl font-bold text-primary">Cocktail's Odyssey</span>
        </NuxtLink>
        
        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="text-dark hover:text-primary transition-colors">Home</NuxtLink>
          <NuxtLink to="/explore" class="text-dark hover:text-primary transition-colors">Explore</NuxtLink>
          <NuxtLink to="/favorites" class="text-dark hover:text-primary transition-colors">Favorites</NuxtLink>
        </nav>
        
        <div class="flex items-center space-x-4">
          <NuxtLink to="/account" class="text-dark hover:text-primary transition-colors">
            <span class="hidden md:inline">My Account</span>
            <span class="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
          </NuxtLink>
          
          <button @click="toggleMobileMenu" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-2">
        <nav class="flex flex-col space-y-3">
          <NuxtLink to="/" class="text-dark hover:text-primary transition-colors">Home</NuxtLink>
          <NuxtLink to="/explore" class="text-dark hover:text-primary transition-colors">Explore</NuxtLink>
          <NuxtLink to="/favorites" class="text-dark hover:text-primary transition-colors">Favorites</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>