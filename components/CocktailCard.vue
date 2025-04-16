<template>
  <div class="cocktail-card-unique">
    <div class="cocktail-card-unique__image-container">
      <img
        :src="cocktail.image"
        :alt="cocktail.name"
        class="cocktail-card-unique__image"
      />

      <button
        @click.stop="toggleFavorite"
        class="cocktail-card-unique__favorite-btn"
        :class="{ 'cocktail-card-unique__favorite-btn--active': isFavorite }"
      >
        <svg viewBox="0 0 24 24" class="cocktail-card-unique__heart-icon">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>
    </div>

    <div class="cocktail-card-unique__footer">
      <div class="cocktail-card-unique__alcohol-badge">
        <span>{{ cocktail.alcoholPercentage || "67%" }} alc</span>
      </div>
      <div class="cocktail-card-unique__title-row">
        <h3 class="cocktail-card-unique__title">
          {{ cocktail.name || "Card title" }}
        </h3>
        <svg class="cocktail-card-unique__snowflake-icon" viewBox="0 0 24 24">
          <path d="M12 2L9.2 9.2 2 12l7.2 2.8L12 22l2.8-7.2L22 12l-7.2-2.8z" />
          <path d="M12 5.5v13M5.5 12h13" />
          <path d="M7.5 7.5l9 9M7.5 16.5l9-9" />
        </svg>
      </div>

      <div class="cocktail-card-unique__time-info">
        <svg class="cocktail-card-unique__clock-icon" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        <span>{{ cocktail.time || "7" }} min</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggle-favorite"]);

const toggleFavorite = () => {
  emit("toggle-favorite", props.cocktail.id);
};
</script>

<style scoped>
.cocktail-card-unique {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid #0a2540;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cocktail-card-unique__image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.cocktail-card-unique__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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
  fill: white;
}

.cocktail-card-unique__alcohol-badge {
  position: absolute;
  bottom: 80px;
  left: 12px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 14px;
  color: #333;
  backdrop-filter: blur(8px); /* Ajoute un flou à l’arrière-plan */
  -webkit-backdrop-filter: blur(8px); /* Pour la compatibilité avec Safari */
}

.cocktail-card-unique__footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px 16px 12px;
  background: linear-gradient(#ffffff00 20%, white 80%  );
}

.cocktail-card-unique__title-row {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
}

.cocktail-card-unique__title {
  font-family: serif;
  font-size: 22px;
  font-weight: 700;
  color: #0a2540;
  margin: 0;
}

.cocktail-card-unique__snowflake-icon {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: #0a2540;
  stroke-width: 1.5px;
}

.cocktail-card-unique__time-info {
  display: flex;
  align-items: center;
  color: #0a2540;
  font-size: 16px;
}

.cocktail-card-unique__clock-icon {
  width: 20px;
  height: 20px;
  margin-right: 6px;
  fill: none;
  stroke: #0a2540;
  stroke-width: 1.5px;
}
</style>
