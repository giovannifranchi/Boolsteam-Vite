<template>
    <div class="container">
        <h3 class="text-white">OFFERTE SPECIALI</h3>
        <div class="row">
            <div class="col-4" v-for="(discounted, index) in getDiscountGames" :key="index">
                <CardDiscount :info="discounted"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import CardDiscount from '../utils/CardDiscount.vue';

    export default {
        name: 'HomeBottom',

        components: {CardDiscount},

        computed: {
            ...mapGetters(['getDiscountGames'])
        },

        methods: {
            ...mapActions(['fetchDiscountGames'])
        },

        created(){
            this.fetchDiscountGames();
        }
    }
</script>

<style lang="scss" scoped>

</style>