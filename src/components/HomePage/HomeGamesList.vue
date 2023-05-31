<template>
    <div class="ms-container">
        <h3 class="text-white">I Giochi</h3>
        <ul class="list-unstyled m-0 p-0">
            <li v-for="(game, index) in getAllGames" :key="index" class="mb-3 ms-card">
                <CardList :info="game"/>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CardList from '../utils/CardList.vue';

    export default {
        name:'HomeGamesList',

        components: {CardList},

        computed: {
            ...mapGetters(['getAllGames'])
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
@use '../../assets/partials/variables' as *;
.ms-container {
    background-color: $quternary;
    padding: 30px;
    .ms-card {
        background-color: $tertiary;
        box-shadow: 0px 13px 39px 13px rgba(9, 9, 9, 0.8);
    }
}
</style>