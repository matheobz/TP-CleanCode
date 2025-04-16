import { defineStore } from 'pinia';

export const useCocktailStore = defineStore('cocktails', {
  state: () => ({
    cocktails: [
      {
        id: 1,
        name: 'Classic Mojito',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['White rum', 'Sugar', 'Lime juice', 'Soda water', 'Mint leaves'],
        instructions: [
          'Muddle mint leaves with sugar and lime juice',
          'Add a splash of soda water and fill the glass with cracked ice',
          'Pour the rum and top with soda water',
          'Garnish with mint leaves and serve'
        ],
        time: 5,
        rating: 4.8,
        reviews: 245,
        category: 'Refreshing'
      },
      {
        id: 2,
        name: 'Espresso Martini',
        image: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['Vodka', 'Coffee liqueur', 'Espresso', 'Simple syrup'],
        instructions: [
          'Add all ingredients into a shaker with ice and shake hard',
          'Double strain into a chilled martini glass',
          'Garnish with coffee beans'
        ],
        time: 8,
        rating: 4.7,
        reviews: 189,
        category: 'Strong'
      },
      {
        id: 3,
        name: 'Strawberry Daiquiri',
        image: 'https://images.unsplash.com/photo-1606928914671-d66a9c5ce3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['White rum', 'Fresh strawberries', 'Lime juice', 'Simple syrup'],
        instructions: [
          'Add all ingredients into a blender with ice',
          'Blend until smooth',
          'Pour into a chilled glass',
          'Garnish with a strawberry'
        ],
        time: 6,
        rating: 4.5,
        reviews: 156,
        category: 'Fruity'
      },
      {
        id: 4,
        name: 'Old Fashioned',
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['Bourbon', 'Angostura bitters', 'Sugar cube', 'Water'],
        instructions: [
          'Place sugar cube in an Old Fashioned glass',
          'Add bitters and a splash of water',
          'Muddle until dissolved',
          'Add bourbon and ice',
          'Stir gently',
          'Garnish with orange peel'
        ],
        time: 4,
        rating: 4.9,
        reviews: 312,
        category: 'Classic'
      },
      {
        id: 5,
        name: 'Piña Colada',
        image: 'https://images.unsplash.com/photo-1582631272901-d934cfe6f320?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['White rum', 'Coconut cream', 'Pineapple juice'],
        instructions: [
          'Add all ingredients into a blender with ice',
          'Blend until smooth',
          'Pour into a chilled glass',
          'Garnish with a pineapple wedge and cherry'
        ],
        time: 7,
        rating: 4.6,
        reviews: 178,
        category: 'Tropical'
      },
      {
        id: 6,
        name: 'Margarita',
        image: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['Tequila', 'Triple sec', 'Lime juice', 'Salt'],
        instructions: [
          'Rub the rim of a glass with lime and dip in salt',
          'Add all ingredients into a shaker with ice',
          'Shake well',
          'Strain into the prepared glass',
          'Garnish with a lime wheel'
        ],
        time: 5,
        rating: 4.7,
        reviews: 203,
        category: 'Citrus'
      },
      {
        id: 7,
        name: 'Negroni',
        image: 'https://images.unsplash.com/photo-1576874240748-795e3bfc4a75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['Gin', 'Campari', 'Sweet vermouth'],
        instructions: [
          'Add all ingredients into a mixing glass with ice',
          'Stir until well-chilled',
          'Strain into a rocks glass filled with ice',
          'Garnish with an orange peel'
        ],
        time: 3,
        rating: 4.8,
        reviews: 167,
        category: 'Bitter'
      },
      {
        id: 8,
        name: 'Moscow Mule',
        image: 'https://images.unsplash.com/photo-1530991808291-7e157454758c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['Vodka', 'Ginger beer', 'Lime juice'],
        instructions: [
          'Fill a copper mug with ice',
          'Add vodka and lime juice',
          'Top with ginger beer',
          'Stir gently',
          'Garnish with a lime wheel'
        ],
        time: 4,
        rating: 4.5,
        reviews: 142,
        category: 'Spicy'
      }
    ],
    favorites: [],
    aiSuggestion: {
      name: 'Midnight Blueberry Fizz',
      description: 'A refreshing blend of muddled blueberries, gin, and elderflower liqueur with a hint of lemon and topped with sparkling water.',
      ingredients: ['Gin', 'Blueberries', 'Elderflower Liqueur', 'Lemon', 'Sparkling Water']
    }
  }),
  
  getters: {
    getAllCocktails: (state) => state.cocktails,
    getCocktailById: (state) => (id) => state.cocktails.find(cocktail => cocktail.id === parseInt(id)),
    getFavoriteCocktails: (state) => state.cocktails.filter(cocktail => state.favorites.includes(cocktail.id)),
    getAiSuggestion: (state) => state.aiSuggestion
  },
  
  actions: {
    toggleFavorite(id) {
      const index = this.favorites.indexOf(id);
      if (index === -1) {
        this.favorites.push(id);
      } else {
        this.favorites.splice(index, 1);
      }
    },
    searchCocktails(query) {
      if (!query) return this.cocktails;
      
      const lowerQuery = query.toLowerCase();
      return this.cocktails.filter(cocktail => 
        cocktail.name.toLowerCase().includes(lowerQuery) || 
        cocktail.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerQuery)) ||
        cocktail.category.toLowerCase().includes(lowerQuery)
      );
    }
  }
});