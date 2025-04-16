<template>
  <div class="cocktail-card-unique">
    <div class="cocktail-card-unique__image-container">
      <img
        :src="cocktail.image"
        :alt="cocktail.name"
        class="cocktail-card-unique__image"
      />

      <!-- Bouton favori (coeur) -->
      <button
        @click.stop="toggleFavorite"
        class="cocktail-card-unique__favorite-btn"
        :class="{ 'cocktail-card-unique__favorite-btn--active': isFavorite }"
      >
        <svg viewBox="0 0 24 24" class="cocktail-card-unique__heart-icon">
          <path
            d="M12 21.35l-1.45-1.32C5.4 
            15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3 
            c1.74 0 3.41.81 4.5 2.09 
            C13.09 3.81 14.76 3 16.5 3 
            19.58 3 22 5.42 22 8.5 
            c0 3.78-3.4 6.86-8.55 11.54L12 
            21.35z"
          />
        </svg>
      </button>

      <!-- Overlay dégradé (pour lisibilité) -->
      <div class="cocktail-card-unique__gradient-overlay"></div>

      <!-- Badge d'alcool en bas à gauche -->
      <div class="cocktail-card-unique__alcohol-badge">
        <span>{{ cocktail.alcoholPercentage || '0%' }} d'alcool</span>
      </div>
    </div>

    <!-- Contenu texte -->
    <div class="cocktail-card-unique__content">
      <div class="cocktail-card-unique__title-row">
        <h3 class="cocktail-card-unique__title">{{ cocktail.name }}</h3>
        <!-- Icône flocon -->
        <svg class="cocktail-card-unique__snowflake-icon" viewBox="0 0 24 24">
          <path d="M12 2L9.2 9.2 2 12l7.2 2.8L12 22l2.8-7.2L22 12l-7.2-2.8z"/>
          <path d="M12 5.5v13M5.5 12h13"/>
          <path d="M7.5 7.5l9 9M7.5 16.5l9-9"/>
        </svg>
      </div>

      <div class="cocktail-card-unique__ingredients">
        <span
          v-for="(ingredient, index) in cocktail.ingredients.slice(0, 3)"
          :key="index"
          class="cocktail-card-unique__ingredient-tag"
        >
          {{ ingredient }}
        </span>
      </div>

      <div class="cocktail-card-unique__time-info">
        <svg class="cocktail-card-unique__clock-icon" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
        <span>{{ cocktail.time }} min</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle-favorite']);

const toggleFavorite = () => {
  emit('toggle-favorite', props.cocktail.id);
};
</script>

<style scoped>
.cocktail-card-unique {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.2;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.cocktail-card-unique:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.cocktail-card-unique__image-container {
  position: relative;
  width: 100%;
  height: 65%;
}

.cocktail-card-unique__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cocktail-card-unique__gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.8) 70%,
    white 100%
  );
  pointer-events: none;
}

/* Bouton favori (cœur) */
.cocktail-card-unique__favorite-btn {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 10;
}

.cocktail-card-unique__heart-icon {
  width: 24px;
  height: 24px;
  fill: white;
  stroke: white;
  stroke-width: 1px;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
}

.cocktail-card-unique__favorite-btn--active .cocktail-card-unique__heart-icon {
  fill: white; /* Couleur quand c'est déjà en favori */
}

/* Badge d'alcool */
.cocktail-card-unique__alcohol-badge {
  position: absolute;
  bottom: 40%;
  left: 12px;
  z-index: 5;
  overflow: hidden;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 14px;
  color: #333;
  background-color: rgba(255, 255, 255, 0.5);
}

.cocktail-card-unique__content {
  position: relative;
  padding: 12px 16px;
  height: 35%;
  display: flex;
  flex-direction: column;
}

.cocktail-card-unique__title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.cocktail-card-unique__title {
  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.cocktail-card-unique__snowflake-icon {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #1e293b;
  stroke-width: 1.5px;
}

.cocktail-card-unique__ingredients {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
  flex-grow: 1;
}

.cocktail-card-unique__ingredient-tag {
  font-size: 12px;
  padding: 2px 8px;
  background-color: #334155;
  color: #fff;
  border-radius: 4px;
  display: inline-block;
}

/* Temps préparation */
.cocktail-card-unique__time-info {
  display: flex;
  align-items: center;
  color: #1e293b;
  font-size: 14px;
}

.cocktail-card-unique__clock-icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
  fill: none;
  stroke: #1e293b;
  stroke-width: 1.5px;
}
</style>
