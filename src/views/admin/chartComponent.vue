<template>
  <div class="container">
    <!-- content 白色區塊 -->
    <div class="content">
      <h3 class="pageTitle"><span>表單樣式</span></h3>
      <!-- 設備借用日統計 -->
      <div class="chartDayBlock bgBlock">
        <!-- function start -->
        <div class="function">
          <div class="tableTitle">設備借用週統計</div>
          <div class="filter">
            <div class="page">
              <!-- 沒有上下頁加none -->
              <button class="prev">上一週</button>
              <div class="now">2022/01/01~2022/01/07</div>
              <button class="next" disabled>下一週</button>
            </div>
            <div class="dateInput">
              <input type="date" />~<input type="date" />
            </div>
          </div>
        </div>
        <!-- function end -->
        <!-- tableWrapper start -->
        <div class="">
          <div class="chartWeek">
            <lineChart />
          </div>
        </div>
        <!-- tableWrapper end -->
      </div>
      <div class="chartUserBlock bgBlock">
        <!-- function start -->
        <div class="function">
          <div class="tableTitle">使用者分析</div>
          <div class="filter">
            <div class="radioGrp">
              <label>
                <input
                  type="radio"
                  name="sampleRadio6"
                  value=""
                  title="本週"
                  checked=""
                />本週</label
              >
              <label>
                <input
                  type="radio"
                  name="sampleRadio6"
                  value=""
                  title="本月"
                />本月</label
              >
              <label>
                <input
                  type="radio"
                  name="sampleRadio6"
                  value=""
                  title="本年"
                />本年</label
              >
              <label>
                <input
                  type="radio"
                  name="sampleRadio6"
                  value=""
                  title="自訂"
                />自訂
                <div class="dateInput">
                  <input type="date" />~<input type="date" />
                </div>
              </label>
            </div>
          </div>
        </div>
        <!-- function end -->
        <div class="chartUser">
          <div class="chartTitle">借閱性別比例</div>
          <div class="leftChart">
            <div class="chart">
              <pieChart />
            </div>
          </div>
          <div class="rightText">
            <table>
              <thead>
                <tr>
                  <th>性別</th>
                  <th>借閱人數</th>
                  <th>占比</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>男性</td>
                  <td>50</td>
                  <td>33%</td>
                </tr>
                <tr>
                  <td>女性</td>
                  <td>100</td>
                  <td>66%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="chartUser">
          <div class="chartTitle">借閱性別比例</div>
          <div class="chart">
            <lineChartYear />
          </div>
        </div>
      </div>
      <!-- 設備借用日統計 -->
      <h3 class="pageTitle mt-5"><span>視窗樣式</span></h3>
      <div class="d-flex justify-center">
        <div class="text-center pa-4">
          <v-btn
            variant="flat"
            class="mx-1"
            color="primary"
            @click="dialog = true"
          >
            視窗樣式</v-btn
          >
          <v-dialog v-model="dialog">
            <v-card class="dialogCard">
              <v-card-title>
                <button class="dialogClose" @click="dialog = false"></button
              ></v-card-title>
              <v-card-text class="text-center">
                好像哪裡有問題，這裡預留二到三行配合實際情形顯示錯誤原因。好像哪裡有問題，這裡預留二到三行配合實際情形顯示錯誤原因。
              </v-card-text>
              <template v-slot:actions>
                <v-btn
                  variant="flat"
                  text="關閉"
                  color="secondary"
                  @click="dialog = false"
                ></v-btn>
              </template>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lineChart from "@/components/linechart.vue";
import lineChartYear from "@/components/linechart_year.vue";
import pieChart from "@/components/piechart.vue";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: { lineChart, lineChartYear, pieChart },
};
</script>
<style></style>
