import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      preferences: {
        favoriteLiquors: ['Rum', 'Gin'],
        dislikedIngredients: ['Olives', 'Egg whites'],
        preferredStyle: 'Refreshing'
      },
      savedCocktails: [1, 4, 7]
    }
  }),
  
  getters: {
    getUserProfile: (state) => state.user,
    getSavedCocktails: (state) => state.user.savedCocktails
  },
  
  actions: {
    updateUserProfile(userData) {
      this.user = { ...this.user, ...userData };
    },
    updatePreferences(preferences) {
      this.user.preferences = { ...this.user.preferences, ...preferences };
    },
    toggleSavedCocktail(id) {
      const index = this.user.savedCocktails.indexOf(id);
      if (index === -1) {
        this.user.savedCocktails.push(id);
      } else {
        this.user.savedCocktails.splice(index, 1);
      }
    }
  }
});