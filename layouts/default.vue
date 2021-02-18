<template>
  <div>
    <app-header />
    <Nuxt />
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue';
import AppHeader from "../components/AppHeader";
export default {
  components: { AppHeader, AppFooter}
};
</script>
