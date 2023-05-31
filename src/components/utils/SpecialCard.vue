<template>
    <div class="ms-card position-relative">
        <img :src="info.thumb" :alt="info.game" class="img-fluid">
        <div class="icon">
            <font-awesome-icon icon="fa-bookmark" />
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
.icon {
    position: absolute;
    top: 0;
    right: 0;
    background-color: $primary-blue;
    color: #fff;
}
</style>