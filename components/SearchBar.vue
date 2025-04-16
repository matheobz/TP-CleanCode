<template>
  <div class="relative w-full">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input 
      type="text" 
      class="input pl-10" 
      placeholder="Search for cocktails..." 
      v-model="searchQuery"
      @input="onSearch"
    />
  </div>
</template>

<script setup>
const searchQuery = ref('');
const emit = defineEmits(['search']);

const onSearch = () => {
  emit('search', searchQuery.value);
};
</script>