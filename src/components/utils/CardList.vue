<template>
    <div class="d-flex gap-5 position-relative">
        <div class="img-container w-25">
            <img :src="info.thumb" :alt="info.game">
        </div>
        <div class="details w-50 ps-5">
            <h3>{{ info.game }}</h3>
            <ul class="list-unstyled d-flex gap-3 m-0 p-0">
                <li class="flex-grow-1" v-for="(genre, index) in info.genres" :key="index">
                    <span class="badge text-bg-dark w-100">{{ genre.name }}</span>
                </li>
            </ul>
            <div class="d-flex gap-4 py-4">
                <strong>{{ info.release_date }}</strong>
                <span>Icons</span>
            </div>
        </div>
        <div class="discount p-3 ">
            <DiscountBox :price="info.price" :discountPercentace="info.discount"/>
        </div>
    </div>
</template>

<script>
import DiscountBox from './DiscountBox.vue';


    export default {
        name: 'CardList',

        components: { DiscountBox},

        props: {
            info: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.discount {
    position: absolute;
    bottom: 5px;
    right: 5px;
    
}
</style>