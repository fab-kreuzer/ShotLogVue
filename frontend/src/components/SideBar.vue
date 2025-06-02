<script setup lang="js">
import {computed} from 'vue';
import {useRouter} from 'vue-router';

const emit = defineEmits(['update:expanded']);
const props = defineProps({
  expanded: {
    type: Boolean,
    default: true
  }
});

const router = useRouter();
const expanded = computed({
  get: () => props.expanded,
  set: (value) => emit('update:expanded', value)
});

const toggleSidebar = () => {
  expanded.value = !expanded.value;
};

const navigateTo = (route) => {
  router.push('/' + route);
};
</script>

<template>
  <div class="sidebar" :class="{ 'collapsed': !expanded }">
    <Button id="toggleSideBar" icon="pi pi-bars" @click="toggleSidebar" class="toggle-button"/>
    <div class="menu-items">
      <div class="menu-item" @click="navigateTo('home')">
        <i class="pi pi-home"></i>
        <span v-if="expanded">Übersicht</span>
      </div>
      <div class="menu-item" @click="navigateTo('training')">
        <i class="pi pi-user"></i>
        <span v-if="expanded">Training</span>
      </div>
      <div class="menu-item" @click="navigateTo('competition')">
        <i class="pi pi-cog"></i>
        <span v-if="expanded">Wettkampf</span>
      </div>
      <div class="menu-item" @click="navigateTo('calender')">
        <i class="pi pi-cog"></i>
        <span v-if="expanded">Kalender</span>
      </div>
      <div class="menu-item" @click="navigateTo('user-management')">
        <i class="pi pi-cog"></i>
        <span v-if="expanded">Benutzerverwaltung</span>
      </div>
      <div class="menu-item" @click="navigateTo('profile')">
        <i class="pi pi-cog"></i>
        <span v-if="expanded">Profil</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
#toggleSideBar {
  color: var(--text-color);
}

.sidebar {
  height: 100vh;
  width: 250px;
  transition: width 0.3s;
  background-color: var(--surface-0);
  color: var(--text-color);
}

.sidebar.collapsed {
  width: 80px;
}

.toggle-button {
  margin: 1rem;
}

.menu-items {
  padding: 2rem;
  margin: 0 -1rem;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: .75rem 1rem;
  cursor: pointer;
  gap: 0.5rem;
}

.menu-item:hover {
  background-color: var(--surface-100);
  border-radius: 4px;
  color: var(--primary-color);
}

</style>
