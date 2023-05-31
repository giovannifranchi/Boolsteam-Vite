<template>
    <div class="d-flex">
        <div class="discount">
            <span>-{{ discountPercentace }}</span>
        </div>
        <div class="price">
            <h6 class="previous-price">{{ price }}$</h6>
            <h5 class="active-price">{{ getDiscountedPrice }}$</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DiscountBox',
        props: {
            discountPercentace: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required:true,
            }
        },

        computed: {
            getDiscountedPrice(){
                if(this.discountPercentace && this.price){
                    return ((this.price * this.discountPercentace) / 100).toFixed(2);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;
.discount {
    background-color: $primary-green;
    color: $secondary-green;
}
.price {
    background-color: $tertiary;
    .previous-price {
        color: $text-secondary;
        text-decoration: line-through;
    }
    .active-price {
        color: $secondary-green;
    }
}

</style>