<template>
  <div class="loginWrap">
    <div class="login">
      <div class="logo">
        <img src="~@/images/cms/logo.svg" alt="新竹縣政府文化局" />
      </div>
      <pageView />
      <div class="copyright">新竹縣政府文化局 © 2024 All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import "@/scss/cms/style.scss";
import pageView from "@/views/layout/pageView.vue";
export default {
  data() {
    return {
      passwordShow: true,
    };
  },
  components: {
    pageView,
  },
};
</script>
