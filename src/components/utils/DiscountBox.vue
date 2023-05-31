<template>
  <div class="d-flex" v-if="discountPercentace">
    <div class="discount d-flex justify-content-center align-items-center px-2">
      <span class="fs-3">-{{ discountPercentace }}%</span>
    </div>
    <div class="price d-flex flex-column  align-items-center p-2" >
      <h6 class="previous-price mb-0">{{ price }}$</h6>
      <h5 class="active-price">{{ getDiscountedPrice }}$</h5>
    </div>
  </div>
  <div class="price" v-else>
    <h5 class="active-price m-0">{{ price }}$</h5>
  </div>
</template>

<script>
export default {
  name: "DiscountBox",
  props: {
    discountPercentace: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },

  computed: {
    getDiscountedPrice() {
      if (this.discountPercentace && this.price) {
        return ((this.price * this.discountPercentace) / 100).toFixed(2);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/variables" as *;
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
