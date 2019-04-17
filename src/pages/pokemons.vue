<template>
  <list class="pokemon-list">
    <wxc-cell
      v-for="(item,index) in pokemons"
      :key="index"
      :title="item.name"
      :has-arrow="true"
      @wxcCellClicked="wxcCellClicked"
      :has-top-border="true"
    ></wxc-cell>

  </list>
</template>

<script>
import fly from "@/lib/fly";

import { WxcCell } from "weex-ui";
export default {
  components: { WxcCell },
  data: () => ({
    pokemons: []
  }),
  mounted() {
    this.getPokemons();
  },
  methods: {
    getPokemons() {
      fly
        .get("pokemon/", {
          limit: 30
        })
        .then(res => {
          console.log(res);
          this.pokemons = res.results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    wxcCellClicked(e) {
      this.$router.push({ name: "pokemon" });
    }
  }
};
</script>
