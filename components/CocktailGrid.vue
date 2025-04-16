<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <CocktailCard 
      v-for="cocktail in cocktails" 
      :key="cocktail.id" 
      :cocktail="cocktail" 
      :isFavorite="favorites.includes(cocktail.id)"
      @toggle-favorite="toggleFavorite"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  cocktails: {
    type: Array,
    required: true
  }
});

const favorites = ref([]);

const toggleFavorite = (id) => {
  if (favorites.value.includes(id)) {
    favorites.value = favorites.value.filter(favId => favId !== id);
  } else {
    favorites.value.push(id);
  }
};
</script>