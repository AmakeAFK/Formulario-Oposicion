<script setup lang="ts">
import { ref, onMounted } from 'vue';
const missingWebhook = !import.meta.env.VITE_DISCORD_WEBHOOK;
import { useRouteDataStore } from '@/stores/routeDataStore';
import './css/style.scss';
// import ImageCarousel from './components/ImageCarousel.vue';

import Router from './components/Router.vue';
const isDark = ref(false);
const routeData = useRouteDataStore();

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = true;
    localStorage.setItem('theme', 'dark');
  }
  document.body.classList.toggle('dark', isDark.value);
});

function toggleTheme() {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
}
</script>

<template>
  <header>
    <nav class="navbar">
      <ul>
        <li><a href="https://amakeafk.github.io/BurgerShot/">Página Principal</a></li>
        <li>
          <button class="theme-toggle" @click="toggleTheme">
            Cambiar a {{ isDark ? 'Claro' : 'Oscuro' }}
          </button>
        </li>
      </ul>
    </nav>
    <h1 class="title">{{ routeData.componentName }}</h1>
      <div class="logo-container">
      <a href="https://discord.gg/nSXdES2m3f">
        <img src="https://raw.githubusercontent.com/AmakeAFK/Formulario-Oposicion/refs/heads/main/public/images/Burger_Shot.webp" alt="Logo SAED" class="saed-logo" />
      </a>
    </div>
  </header>

  <main>
    <p v-if="missingWebhook" class="warning">
      No se encontró ninguna URL de algún webhook, ¡no se enviará ningún mensaje!
    </p>
    <Router />
  </main>
</template>
