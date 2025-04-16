<template>
  <div class="account-page">
    <!-- Titre principal -->
    <h1 class="page-title">Mon compte</h1>

    <!-- Carte profil utilisateur -->
    <section class="user-info-card">
      <div class="avatar">
        <div class="avatar-placeholder">
          {{ user.name.split(" ").map(n => n[0]).join("").slice(0, 2) }}
        </div>
      </div>
      <div class="user-details">
        <h2 class="user-name">{{ user.name }}</h2>
        <p class="user-seniority">
          Membre depuis {{ user.membershipYears }} an(s)
          et {{ user.membershipMonths }} mois
        </p>
      </div>

      <button class="settings-btn">
        Paramétrer
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="settings-icon"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 
            1.82l.06.06a2 2 0 0 1 0 2.83 
            2 2 0 0 1-2.83 0l-.06-.06a1.65 
            1.65 0 0 0-1.82-.33 1.65 1.65 
            0 0 0-1 1.51V21a2 2 0 0 1-2 2 
            2 2 0 0 1-2-2v-.09A1.65 1.65 
            0 0 0 9 19.4a1.65 1.65 0 0 
            0-1.82.33l-.06.06a2 2 0 0 
            1-2.83 0 2 2 0 0 1 0-2.83l
            .06-.06a1.65 1.65 0 0 0 .33
            -1.82 1.65 1.65 0 0 0-1.51
            -1H3a2 2 0 0 1-2-2 2 2 
            0 0 1 2-2h.09A1.65 1.65 0 
            0 0 4.6 9a1.65 1.65 0 0 0
            -.33-1.82l-.06-.06a2 2 0 0 
            1 0-2.83 2 2 0 0 1 2.83 0l
            .06.06a1.65 1.65 0 0 0 
            1.82.33H9a1.65 1.65 0 0 0 1
            -1.51V3a2 2 0 0 1 2-2 2 2 
            0 0 1 2 2v.09a1.65 1.65 0 
            0 0 1 1.51 1 1.65 1.65 0 
            0 0 1 .33 1.82l.06.06a2 
            2 0 0 1 0 2.83 2 2 0 
            0 1-2.83 0l-.06-.06a1.65 
            1.65 0 0 0-1.82-.33H15a
            1.65 1.65 0 0 0-1 1.51
            V9a1.65 1.65 0 0 0 1.51 
            1H21a2 2 0 0 1 2 2 2 2 
            0 0 1-2 2h-.09a1.65 1.65 
            0 0 0-1.51 1z"
          />
        </svg>
      </button>
    </section>

    <!-- Section ingrédients + liste de course -->
    <section class="ingredients-lists">
      <!-- Ingrédients -->
      <div class="ingredients-container">
        <h2 class="section-title">Mes ingrédients</h2>
        <div class="ingredient-tags">
          <div
            v-for="(ingredient, index) in userIngredients"
            :key="index"
            class="ingredient-tag"
            :class="`ingredient-tag--${ingredient.type.toLowerCase()}`"
          >
            {{ ingredient.name }}
          </div>
        </div>
        <button class="modify-btn">Modifier</button>
      </div>

      <!-- Liste de course -->
      <div class="shopping-container">
        <h2 class="section-title">Liste de course</h2>
        <ul class="shopping-items">
          <li
            v-for="(item, index) in shoppingList"
            :key="index"
            class="shopping-item"
          >
            {{ item }}
          </li>
        </ul>
        <button class="modify-btn">Modifier</button>
      </div>
    </section>

    <!-- Section favoris -->
    <section class="favorites-section">
      <h2 class="section-title">Mes favoris</h2>

      <!-- Filtres -->
      <div class="filters">
        <div class="filter-group">
          <span class="filter-label">Alcools</span>
          <span class="filter-count">{{ alcoholFilters.length }}</span>
          <div class="filter-dropdown">
            <select class="filter-select">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div class="filter-group">
          <span class="filter-label">Diluants</span>
          <span class="filter-count">{{ diluentFilters.length }}</span>
          <div class="filter-dropdown">
            <select class="filter-select">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div class="filter-group">
          <span class="filter-label">Ingrédients</span>
          <span class="filter-count">{{ ingredientFilters.length }}</span>
          <div class="filter-dropdown">
            <select class="filter-select">
              <option>Select</option>
            </select>
          </div>
        </div>

        <button class="add-cave-btn">
          Ajouter à ma cave
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="add-icon"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>

        <div class="no-alcohol">
          <input
            type="checkbox"
            id="no-alcohol"
            class="no-alcohol-checkbox"
          />
          <label for="no-alcohol" class="no-alcohol-label"
            >Sans alcool</label
          >
        </div>
      </div>

      <!-- Grille de cocktails favoris -->
      <div class="cocktails-grid">
        <div
          v-for="cocktail in favoriteCocktails"
          :key="cocktail.id"
          class="cocktail-card-container"
        >
          <CocktailCardAccount
            :cocktail="cocktail"
            :is-favorite="true"
            @toggle-favorite="toggleFavorite"
          />
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <button
          class="pagination-btn pagination-btn--prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="pagination-icon"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button
          class="pagination-btn pagination-btn--active"
        >
          1
        </button>
        <button class="pagination-btn">2</button>
        <button class="pagination-btn">3</button>

        <button
          class="pagination-btn pagination-btn--next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="pagination-icon"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CocktailCardAccount from "~/components/CocktailCardAccount.vue";

const user = ref({
  name: "Jean Paul LE DROIT",
  email: "jeanpaul@example.com",
  membershipYears: 1,
  membershipMonths: 4,
});

const userIngredients = ref([
  { type: "Alcool", name: "Alcool" },
  { type: "Alcool", name: "Alcool" },
  { type: "Alcool", name: "Alcool" },
  { type: "Diluant", name: "Diluant" },
  { type: "Ingrédient", name: "Ingrédient" },
]);

const shoppingList = ref(["Ingrédient", "Ingrédient", "Ingrédient"]);

const alcoholFilters = ref([1, 2, 3, 4, 5, 6]);
const diluentFilters = ref([1, 2, 3, 4]);
const ingredientFilters = ref([1, 2]);

const favoriteCocktails = ref([
  {
    id: 1,
    name: "Card title",
    image: "/placeholder.svg?height=300&width=300",
    alcoholPercentage: "67%",
    time: 7,
    ingredients: ["ingrédient", "ingrédient", "ingrédient"],
  },
  {
    id: 2,
    name: "Card title",
    image: "/placeholder.svg?height=300&width=300",
    alcoholPercentage: "67%",
    time: 7,
    ingredients: ["ingrédient", "ingrédient", "ingrédient"],
  },
  {
    id: 3,
    name: "Card title",
    image: "/placeholder.svg?height=300&width=300",
    alcoholPercentage: "67%",
    time: 7,
    ingredients: ["ingrédient", "ingrédient", "ingrédient"],
  },
]);

const toggleFavorite = (cocktailId) => {
  console.log("Toggle favorite for cocktail ID:", cocktailId);
};
</script>

<style scoped>
/* Page globale */
.account-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
  background-color: #ffffff;
}

/* Titre principal */
.page-title {
  font-family: Georgia, serif;
  font-size: 2rem;
  color: #f58220;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Carte profil utilisateur */
.user-info-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 20px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 30px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder {
  font-size: 24px;
  font-weight: bold;
  color: #64748b;
}

.user-details .user-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #1e293b;
}

.user-details .user-seniority {
  font-size: 0.9rem;
  color: #64748b;
  margin: 5px 0 0;
}

.settings-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background-color: #1e293b;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.settings-icon {
  width: 16px;
  height: 16px;
}

/* Section ingrédients + liste de course */
.ingredients-lists {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.ingredients-container,
.shopping-container {
  flex: 1;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  position: relative;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: #1e293b;
}

.ingredient-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.ingredient-tag {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  background-color: #e2e8f0;
  color: #1e293b;
}

.ingredient-tag--alcool,
.ingredient-tag--diluant,
.ingredient-tag--ingrédient {
  background-color: #f1f5f9;
}

.shopping-items {
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
}

.shopping-item {
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
  font-size: 14px;
  color: #1e293b;
}

.modify-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 6px 12px;
  background-color: #f58220;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

/* Section favoris */
.favorites-section {
  background-color: #f9f7f2;
  padding: 20px;
  border-radius: 8px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-label {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
}

.filter-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #1e293b;
  color: white;
  border-radius: 50%;
  font-size: 12px;
}

.filter-dropdown {
  position: relative;
}

.filter-select {
  padding: 6px 30px 6px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background-color: white;
  font-size: 14px;
  appearance: none;
  cursor: pointer;
}

.add-cave-btn {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #f58220;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.add-icon {
  width: 16px;
  height: 16px;
}

.no-alcohol {
  display: flex;
  align-items: center;
  gap: 5px;
}

.no-alcohol-checkbox {
  width: 16px;
  height: 16px;
  accent-color: #f58220;
}

.no-alcohol-label {
  font-size: 14px;
  color: #1e293b;
}

/* Grille de cocktails */
.cocktails-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.cocktail-card-container {
  width: 100%;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background-color: white;
  color: #1e293b;
  font-size: 14px;
  cursor: pointer;
}

.pagination-btn--active {
  background-color: #f58220;
  color: #fff;
  border-color: #f58220;
}

.pagination-icon {
  width: 16px;
  height: 16px;
}

/* Responsive */
@media (max-width: 1024px) {
  .cocktails-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .ingredients-lists {
    flex-direction: column;
  }

  .cocktails-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .add-cave-btn {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .cocktails-grid {
    grid-template-columns: 1fr;
  }

  .user-info-card {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .settings-btn {
    position: static;
    width: 100%;
    margin-top: 15px;
    justify-content: center;
  }

  .filters {
    flex-direction: column;
    align-items: flex-start;
  }

  .filter-group {
    width: 100%;
  }

  .filter-select {
    width: 100%;
  }
}
</style>
