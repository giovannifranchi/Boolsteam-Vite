<template>
  <div
    class="py-3"
    v-if="getHighlightedGame"
    :style="{
      backgroundImage: 'url(' + getHighlightedGame.thumb + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }"
  >
    <Navbar :links="links" />
    <h1 class="text-white my-5">Giochi</h1>
    <SpecialCardVue :info="getHighlightedGame" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "../utils/Navbar.vue";
import SpecialCardVue from "../utils/SpecialCard.vue";

export default {
  name: "HomeMain",

  components: { Navbar, SpecialCardVue },

  data() {
    return {
      links: ["il tuo Negazio", "Novità e tendenze", "Categorie", "Negozio dei punti", "Notizie", "Laboratori"],
    };
  },

  computed: {
    ...mapGetters(["getHighlightedGame"]),
  },

  methods: {
    ...mapActions(["fetchHighlightedGame"]),
  },

  created() {
    this.fetchHighlightedGame();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 99;
}
</style>
