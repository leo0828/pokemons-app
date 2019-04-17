<template>
  <div>
    <wxc-button
      text="To Pokemons Page"
      type="blue"
      @wxcButtonClicked="jump('pokemons')"
    >
    </wxc-button>
    <wxc-button
      text="To Pokemon Page"
      type="blue"
      @wxcButtonClicked="jump('pokemon')"
    >
    </wxc-button>
  </div>
</template>
<script>
import { WxcButton } from "weex-ui";
export default {
  name: "index-page",
  components: { WxcButton },
  methods: {
    jump(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>
<style>
.btn {
  padding: 15px;
  border: 1px solid #f2f2f2;
  background: #409eff;
  color: #fff;
  font-size: 32px;
}

.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
</style>