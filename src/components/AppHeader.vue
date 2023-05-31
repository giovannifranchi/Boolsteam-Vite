<template>
  <!-- header -->
  <header class="py-4">
    <!-- container -->
    <div class="container d-flex align-items-center">
        <!-- Logo -->
        <a href="#" class="pe-5">
            <img src="../assets/img/steam-logo.png" alt="steam-logo" class="ms-logo" />
        </a>
      <!-- list -->
      <ul class="list-unstyled m-0  d-flex gap-3 px-5">
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
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
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
}
</style>
