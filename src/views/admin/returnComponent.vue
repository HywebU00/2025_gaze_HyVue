<template>
  <div class="container">
    <!-- content 白色區塊 -->
    <div class="content">
      <!-- breadcrumb路徑 -->
      <nav aria-label="Breadcrumb" class="breadcrumb">
        <ul>
          <li><a href="#">首頁</a></li>
          <li><a href="#">設備歸還</a></li>
        </ul>
      </nav>
      <h2 class="pageTitle"><span>設備歸還</span></h2>
      <!-- 設備歸還 -->
      <div class="returnBlock bgBlock">
        <div class="barcode"><span>設備條碼</span>AD4592349</div>
        <!-- 未掃描條碼前，在gazeInfo後面新增hidden隱藏下方表格，掃描後刪除hidden顯示下方表格 -->
        <!-- gazeInfo start -->
        <div class="gazeInfo">
          <v-form>
            <table class="vTable">
              <tbody>
                <tr>
                  <th>借閱人</th>
                  <td>余Ｏ運</td>
                </tr>
                <tr>
                  <th>借閱證號</th>
                  <td>A123OOOO89</td>
                </tr>
                <tr>
                  <th>櫃位</th>
                  <td>直立式A櫃-38</td>
                </tr>
                <tr>
                  <th>借閱時間</th>
                  <td>2024/07/01 09:10:05</td>
                </tr>
                <tr>
                  <th>歸還時間</th>
                  <td>2024/07/01 17:20:32</td>
                </tr>
                <tr>
                  <th>
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    >設備狀態初判
                  </th>
                  <td>
                    <div class="checkGrp">
                      <label>
                        <input
                          type="radio"
                          name=""
                          value=""
                          title="無損壞"
                          checked=""
                        />無損壞</label
                      >
                      <label>
                        <input
                          type="radio"
                          name=""
                          value=""
                          title="有損壞，請備註："
                        />有損壞，請備註：</label
                      >
                    </div>
                    <textarea name="" id="" rows="4"></textarea>
                    <div class="notice error">此選項為必選</div>
                  </td>
                </tr>
                <!-- 表單 start -->
                <tr>
                  <th>文字標準表單</th>
                  <td>
                    <v-select
                      label=""
                      variant="solo"
                      density="compact"
                      hide-details="auto"
                      single-line
                      :items="['選項ㄧ', '選項二', '選項三']"
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <th>文字標準表單</th>
                  <td>
                    <v-radio-group color="primary" hide-details="auto">
                      <v-radio label="無損壞" value="2"></v-radio>
                      <v-radio label="有損壞" value="3"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <th>文字標準表單</th>
                  <td>
                    <v-text-field
                      density="compact"
                      label="文字標準表單"
                      variant="solo"
                      single-line
                      class="input"
                      hide-details="auto"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <th>設備狀態初判</th>
                  <td>
                    <v-textarea
                      label=""
                      hide-details="auto"
                      variant="solo"
                      :rules="rules"
                      messages="此選項為必選"
                      model-value="說明文字說明文字說明文字"
                    ></v-textarea>
                  </td>
                </tr>
                <!-- 表單 end -->
              </tbody>
            </table>
            <div class="btnGrp">
              <button type="button" class="btn">取消</button>
              <button type="button" class="btn submit">確認歸還</button>
            </div>
          </v-form>
        </div>
        <!-- gazeInfo end -->
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
