<template>
  <!-- header -->
  <header class="py-5">
    <!-- container -->
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/steam-logo.png" alt="steam-logo" class="w-25" />
      </a>
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
}
</style>
