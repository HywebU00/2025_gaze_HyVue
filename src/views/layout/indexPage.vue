<template>
  <div class="body">
    <div class="indexWrap">
      <h2>後台管理介面</h2>
      <table>
        <thead>
          <tr>
            <th>頁面名稱</th>
            <th>連結</th>
            <th>備註</th>
          </tr>
        </thead>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.title }}</td>
          <td>
            <a :href="`${item.fileNote}`">{{ item.name }}</a>
          </td>
          <td>
            <!-- <a :href="`portrait/${item.filePortrait}`">{{ item.name }}</a> -->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "01.後台登入頁",
          name: "01.login.html",
          fileLandscape: "https://hywebu00.github.io/2025_gaze_Vue/#/password",
          fileNote: "",
        },
        {
          title: "01-1.忘記密碼1",
          name: "01-1.forget_pw1.html",
          fileLandscape: "",
          fileNote: "輸入電子郵件來重設您的密碼",
        },
        {
          title: "01-2.忘記密碼2",
          name: "	01-2.forget_pw2.html",
          fileLandscape: "",
          fileNote: "重設你的密碼",
        },
        {
          title: "01-2.忘記密碼3",
          name: "	01-3.forget_pw3.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "02.櫃位狀態",
          name: "02.status.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "03.設備歸還",
          name: "03.return.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "04.統計報表",
          name: "	04.statistics.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "05.充電櫃管理",
          name: "	05.manage.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "05-1.充電櫃管理-新增充電櫃",
          name: "	05-1.manage_add.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "05-2.充電櫃管理-資料維護",
          name: "05-2.充電櫃管理-資料維護",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "06.同意條款維護",
          name: "	06.terms.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "07.卡片維護-讀者卡列表",
          name: "	07.card_reader.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "07-1.卡片維護-館員卡列表",
          name: "	07-1.card_librarian.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "07-2.卡片維護-新增卡片",
          name: "	07-2.card_add.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "07-2.卡片維護-卡片資訊",
          name: "07-3.card_info.html",
          fileLandscape: "",
          fileNote: "",
        },
        {
          title: "08.彈出視窗",
          name: "08.dialog.html",
          fileLandscape: "",
          fileNote: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.indexWrap {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}
.index_title {
  display: flex;
  justify-content: space-between;
}
h2 {
  color: #53402b;
}
h2 + p {
  color: #8b2b3f;
  font-weight: 700;
}
table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #e5dbc8;
}
th {
  padding: 0.5rem 1rem;
  background: #e5dbc8;
  color: #53402b;
}
td {
  padding: 0.5rem 1rem;
  border-bottom: 2px solid #e5dbc8;
  min-width: 200px;
}
td:first-child {
  width: 40%;
}
a {
  color: #000;
  text-decoration: none;
}
a:hover {
  color: #53402b;
  text-decoration: underline;
}
</style>
