<template>
  <div class="container">
    <wxc-minibar
      :title="title"
      use-default-return
    >
    </wxc-minibar>
    <router-view />
  </div>
</template>
<script>
import { WxcMinibar } from "weex-ui";
export default {
  components: {
    WxcMinibar
  },
  data: () => ({
    title: "",
    showBack: false
  }),
  mounted() {
    console.log("当前路由：", this.$route);
    this.setTitle();
  },
  watch: {
    $route() {
      console.log("当前路由：", this.$route);
      this.setTitle();
    }
  },
  methods: {
    setTitle() {
      this.title = this.$route.meta.title;
    }
  }
};
</script>

