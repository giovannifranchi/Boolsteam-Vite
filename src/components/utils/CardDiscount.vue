<template>
    <div class="ms-card py-5">
        <div class="img-container w-100">
            <img :src="info.thumb" :alt="info.game" class="ms-img">
        </div>
        <DiscountBox :discountPercentace="info.discount" :price="info.price" class="w-25"/>
    </div>
</template>

<script>
import DiscountBox from './DiscountBox.vue';


    export default {
        name: 'CardDiscount',
        props: {
            info: {
                type:Object,
                required: true,
            }
        },
        components: { DiscountBox},
    }
</script>

<style lang="scss" scoped>
.ms-img {
    aspect-ratio: 1/.7;
    width: 100%;
}
</style>