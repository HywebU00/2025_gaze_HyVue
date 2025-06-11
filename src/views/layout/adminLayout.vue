<template>
  <div class="wrap">
    <!-- header -->
    <header class="header">
      <div class="container">
        <h1 class="h1Title">
          <a href="cms.html">
            <div class="logo"><img src="~@/images/cms/logo.svg" alt="" /></div>
            <div class="dep">
              新竹縣政府文化局<span>閱讀器充電櫃管理平台</span>
            </div>
          </a>
        </h1>
        <div class="navInfo">
          <div class="member">林O倫</div>
          <button class="logOut" onclick="window.location.href='01.login.html'">
            登出
          </button>
        </div>
        <nav class="mainMenu">
          <div class="mobileMenu"></div>
          <div class="menu">
            <ul>
              <li><a href="02.status.html" class="active">櫃位狀態</a></li>
              <li><a href="03.return.html">設備歸還</a></li>
              <li><a href="04.statistics.html">統計報表</a></li>
              <li><a href="05.manage.html">充電櫃管理</a></li>
              <li><a href="06.terms.html">同意條款維護</a></li>
              <li><a href="07.card_reader.html">卡片維護</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- main -->
    <main class="main">
      <pageView />
    </main>
    <!-- copyright -->
    <div class="copyright">新竹縣政府文化局 © 2024 All Rights Reserved.</div>
  </div>
</template>

<script>
import "@/scss/cms/style.scss";
import pageView from "@/views/layout/pageView.vue";
export default {
  components: {
    pageView,
  },
};
</script>
