<script>
  import AppHeaderVue from './components/AppHeader.vue';
  import HomePage from './views/HomePage.vue';
  import AppFooter from './components/AppFooter.vue';


  export default {
    name: 'App',

    components: {AppHeaderVue, AppFooter, HomePage},
  }
</script>

<template>
  <AppHeaderVue/>
  <HomePage/>
  <AppFooter/>
</template>



