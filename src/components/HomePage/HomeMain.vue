<template>
  <div
    class="py-5"
    v-if="getHighlightedGame"
    :style="{
      backgroundImage: 'url(' + getHighlightedGame.thumb + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }"
  >
    <div class="container">
      <Navbar :links="links" />
      <h1 class="text-white my-5">Giochi</h1>
      <div class="d-flex gap-5">
        <SpecialCardVue :info="getHighlightedGame" />
        <CardInfo :info="getHighlightedGame" class="flex-grow-1 p-5 me-3" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "../utils/Navbar.vue";
import SpecialCardVue from "../utils/SpecialCard.vue";
import CardInfo from "../utils/CardInfo.vue";

export default {
  name: "HomeMain",

  components: { Navbar, SpecialCardVue, CardInfo },

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

</style>
