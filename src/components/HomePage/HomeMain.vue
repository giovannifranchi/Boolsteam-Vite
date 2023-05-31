<template>
    <div class="wrapper py-3">
        <Navbar :links="links"/>
    </div>
</template>

<script>
import Navbar from '../utils/Navbar.vue';

    export default {
        name: 'HomeMain',

        components: {Navbar},

        data(){
            return {
                links: ['il tuo Negazio', 'Novità e tendenze', 'Categorie', 'Negozio dei punti', 'Notizie', 'Laboratori']
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper {
    // TODO: delete this class when api are ready
    background-color: transparent;
    height: 400px;
}
</style>