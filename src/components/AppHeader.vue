<template>
  <!-- header -->
  <header class="">
    <!-- container -->
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Logo -->
      <a href="#" class="py-3">
        <img src="../assets/img/steam-logo.png" alt="steam-logo" class="ms-logo" />
      </a>
      <!-- list -->
      <!-- TODO: need to be changed with routerlink -->
      <ul class="list-unstyled m-0 d-flex gap-3 py-3">
        <li>
          <a href="#" class="text-decoration-none text-reset">NEGOZIO</a>
        </li>
        <li>
          <a href="#" class="text-decoration-none text-reset">COMMUNITY</a>
        </li>
        <li>
          <a href="#" class="text-decoration-none text-reset">INFORMAZIONI</a>
        </li>
        <li>
          <a href="#" class="text-decoration-none text-reset">ASSISTENZA</a>
        </li>
      </ul>
      <!-- options -->
      <div class="options align-self-start d-flex align-items-start">
        <div class="install p-1">
          <font-awesome-icon icon="fa-regular fa-download" />
          <span>Installa Steam</span>
        </div>
        <div class="actions d-flex ps-2 py-1">
          <a href="" class="text-reset px-2 ms-border text-decoration-none">ACCEDI</a>
          <!-- dropdown -->
          <div class="dropdown">
            <a
              class=" dropdown-toggle text-reset px-2 text-decoration-none"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              LINGUA
            </a>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AppHeader",
  components: { FontAwesomeIcon },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/variables" as *;

header {
  background-color: $primary;
  color: $text-primary;
  .ms-logo {
    width: 12.5rem;
  }
  .install {
    background-color: $tertiary-green;
    color: #fff;
  }
  .ms-border {
    border-right: 2px solid $text-primary;
  }
}
</style>
