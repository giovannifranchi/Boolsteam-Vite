<template>
  <div class="ms-navigator d-flex justify-content-between ps-4 pe-1 py-1">
    <ul class="list-unstyled d-flex gap-5 bg-transparent m-0 p-0 align-items-center">
      <li v-for="(link, index) in links" :key="index">
        <a href="#" class="text-reset text-decoration-none">{{ link }}</a>
      </li>
    </ul>
    <div class="input-group w-25">
      <input
        type="text"
        class="form-control ms-search"
        placeholder="Cerca"
      />
      <span class="input-group-text ms-icon" id="basic-addon2">
        <font-awesome-icon icon="fa-magnifying-glass" />
      </span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Navbar",

  props: {
    links: {
      type: Array,
      required: true,
    },
  },

  components: {FontAwesomeIcon},
};
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;

.ms-navigator{
    background-color: $primary-blue;
    color: #fff;
    .ms-search {
        background-color: $secondary-blue;
        border-color: $secondary-blue;
        color: #fff;
    }
    .ms-icon {
        background-color: $tertiary-blue;
        border-color: $tertiary-blue;
        color: #fff;
    }
}
</style>
