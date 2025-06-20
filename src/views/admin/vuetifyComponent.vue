<template>
  <div class="container">
    <!-- content 白色區塊 -->
    <div class="content">
      <h3 class="pageTitle"><span>按鈕樣式</span></h3>
      <div class="mb-5">
        <v-btn variant="flat" class="mx-1" color="primary">Vuetify按鈕</v-btn>
        <v-btn variant="flat" class="mx-1" color="secondary"
          >secondary按鈕</v-btn
        >
      </div>

      <h3 class="pageTitle"><span>表單樣式</span></h3>
      <!-- 設備借用日統計 -->
      <div class="chartDayBlock bgBlock">
        <!-- function start -->
        <div class="function">
          <div class="tableTitle">設備借用日統計</div>
          <div class="filter">
            <div class="page">
              <!-- 沒有上下頁加none -->
              <button class="prev">上一天</button>
              <div class="now">2022/01/01</div>
              <button class="next" disabled>下一天</button>
            </div>
            <div class="dateInput"><input type="date" /></div>
          </div>
        </div>
        <!-- function end -->
        <!-- tableWrapper start -->
        <div class="tableWrapper">
          <dataTableServerVue />
          <div class="mt-4">
            <dataTableVirtualVue />
          </div>
        </div>
        <!-- tableWrapper end -->
      </div>
    </div>
  </div>
</template>

<script>
import dataTableServerVue from "@/components/dataTableServer.vue";
import dataTableVirtualVue from "@/components/dataTableVirtualVue.vue";
export default {
  data() {
    return {
      currentTab: 0,
      tabs: ["直立式48格", "桌上型8格", "桌上型8+12格"],
    };
  },
  components: {
    dataTableServerVue,
    dataTableVirtualVue,
  },
};
</script>
<style></style>
