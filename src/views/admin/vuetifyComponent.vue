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
        </div>
        <!-- tableWrapper end -->
      </div>

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
          <table class="hTable">
            <thead>
              <tr>
                <th scope="col">序號</th>
                <th scope="col">充電櫃編號</th>
                <th scope="col">設備代碼</th>
                <th scope="col">借閱人</th>
                <th scope="col">借閱時間</th>
                <th scope="col">歸還時間</th>
                <th scope="col" class="sort">
                  狀態
                  <button class="arrowUp active">升冪</button>
                  <button class="arrowDown">降冪</button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center">1</td>
                <td>直立式A櫃-09</td>
                <td>AD1234567</td>
                <td>黃Ｏ玫</td>
                <td>2024/07/01<br />09:10:05</td>
                <td></td>
                <td class="center"><span class="borrow">借閱中</span></td>
              </tr>
              <tr>
                <td class="center">2</td>
                <td>直立式A櫃-09</td>
                <td>AD1234567</td>
                <td>黃Ｏ玫</td>
                <td>2024/07/01<br />09:10:05</td>
                <td></td>
                <td class="center"><span class="borrow">借閱中</span></td>
              </tr>
              <tr>
                <td class="center">3</td>
                <td>直立式A櫃-09</td>
                <td>AD1234567</td>
                <td>黃Ｏ玫</td>
                <td>2024/07/01<br />09:10:05</td>
                <td>2024/07/01<br />09:10:05</td>
                <td class="center">已歸還</td>
              </tr>
              <tr>
                <td class="center">4</td>
                <td>直立式A櫃-09</td>
                <td>AD1234567</td>
                <td>黃Ｏ玫</td>
                <td>2024/07/01<br />09:10:05</td>
                <td>2024/07/01<br />09:10:05</td>
                <td class="center">已歸還</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- tableWrapper end -->
      </div>
    </div>
  </div>
</template>

<script>
import dataTableServerVue from "@/components/dataTableServer.vue";

export default {
  data() {
    return {
      currentTab: 0,
      tabs: ["直立式48格", "桌上型8格", "桌上型8+12格"],
    };
  },
  components: {
    dataTableServerVue,
  },
};
</script>
<style></style>
