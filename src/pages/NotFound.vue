<script setup lang="js">
import Button from 'primevue/button';
import {createRouter as $router} from "vue-router/dist/vue-router.esm-browser.js";
</script>

<template>
  <div class="surface-0 text-700 flex flex-column align-items-center justify-content-center">
    <h1 class="text-900 font-bold text-8xl mb-2">404</h1>
    <p class="text-600 mb-5">The page you requested could not be found.</p>
    <Button label="Go Home" icon="pi pi-home" class="p-button-raised p-button-rounded" @click="$router.push('/')"/>
  </div>
</template>

<style scoped>
div {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--surface-0);
  color: var(--text-color);
}
</style>