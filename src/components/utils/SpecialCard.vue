<template>
    <div class="ms-card position-relative w-25 ms-5">
        <img :src="info.thumb" :alt="info.game" class="img-fluid ms-img">
        <div class="icon">
            <font-awesome-icon icon="fa-bookmark" />
        </div>
        <div class="price">
            <DiscountBoxVue :price="info.price" :discountPercentace="info.discount"/>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import DiscountBoxVue from "./DiscountBox.vue";

    export default {
        name: 'SpecialCard',
        props: {
            info: {
                type: Object,
                required: true,
            }
        },
        components: {FontAwesomeIcon, DiscountBoxVue},
    }
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;

.ms-card{
    aspect-ratio: 1/1;
}

.ms-img {
    object-fit: cover;
    height: 100%;
}
.icon {
    position: absolute;
    top: 0;
    right: 0;
    background-color: $primary-blue;
    color: #fff;
    font-size: 1.25rem;
    padding: 0.3125rem;

}

.price {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;
}
</style>