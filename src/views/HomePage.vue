<template>
    <main>
        <div class="ms-container">
            <HomeMain/>
        </div>
    </main>
</template>

<script>
import HomeMain from '../components/HomePage/HomeMain.vue';

    export default {
        name: 'HomePage',

        components: {HomeMain},
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

main {
    background-color: $secondary;
}
</style>