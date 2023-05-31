<template>
    <main>
        <div class="ms-container">
            <HomeMain/>
            <HomeBottomVue/>
        </div>
    </main>
</template>

<script>
import HomeMain from '../components/HomePage/HomeMain.vue';
import HomeBottomVue from '../components/HomePage/HomeBottom.vue';

    export default {
        name: 'HomePage',

        components: {HomeMain, HomeBottomVue},
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

main {
    background-color: $secondary;
}
</style>