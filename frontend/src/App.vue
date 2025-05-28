<script setup>
import SideBar from './components/SideBar.vue'
import {RouterView, useRoute} from 'vue-router'
import {computed, ref} from 'vue'
import RouteNames from './routeNames'

const route = useRoute()
const sidebarExpanded = ref(true)

// Define routes where sidebar should not be displayed
const routesWithoutSidebar = [RouteNames.LOGIN, RouteNames.NOT_FOUND]

// Compute whether to show sidebar based on current route
const showSidebar = computed(() => {
  return !routesWithoutSidebar.includes(route.name)
})
</script>

<template>
  <div class="flex flex-row w-full h-screen">
    <SideBar v-if="showSidebar" v-model:expanded="sidebarExpanded" class="flex-none" style="position: fixed; left: 0; top: 0; z-index: 1000;"></SideBar>
    <div class="flex-grow-1" :class="{ 'ml-0': !showSidebar, 'ml-64': showSidebar && sidebarExpanded, 'ml-20': showSidebar && !sidebarExpanded }">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
</style>
