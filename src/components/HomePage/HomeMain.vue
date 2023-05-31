<template>
    <div class="wrapper py-3">
        <Navbar :links="links"/>
        <h1 class="text-white my-5">Giochi</h1>
        <h3 class="text-white" v-for="game in getAllGames">{{ game.game }}</h3>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Navbar from '../utils/Navbar.vue';

    export default {
        name: 'HomeMain',

        components: {Navbar},

        data(){
            return {
                links: ['il tuo Negazio', 'Novità e tendenze', 'Categorie', 'Negozio dei punti', 'Notizie', 'Laboratori']
            }
        },

        computed: {
            ...mapGetters(['getAllGames']),
        },

        methods: {
            ...mapActions(['fetchAllGames'])
        },

        created(){
            this.fetchAllGames();
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