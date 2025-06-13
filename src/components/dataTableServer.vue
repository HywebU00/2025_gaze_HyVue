<template>
  <v-data-table-server
    class="dataTableServer"
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    :loading="loading"
    item-value="name"
    :items-per-page-text="customItemsPerPageText"
    @update:options="loadItems"
    hover
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-center">{{ item.no }}</td>
        <td class="text-center">{{ item.class }}</td>
        <td class="text-center">{{ item.num }}</td>
        <td class="text-center">{{ item.name }}</td>
        <td class="text-start">{{ item.time }}</td>
        <td class="text-start">{{ item.return }}</td>
        <td class="text-center">
          <span v-if="item.status" class="borrow text-no-wrap">借閱中</span>
          <span v-else class="text-no-wrap">已歸還</span>
        </td>
        <td>
          <div class="btnGroup d-flex">
            <v-btn
              :ripple="false"
              class="edit"
              elevation="0"
              variant="text"
              size="small"
            >
              <span class="btnImg edit"></span>
            </v-btn>
          </div>
        </td>
        <td class="text-center">
          <v-btn
            :ripple="false"
            class="delete"
            elevation="0"
            variant="text"
            size="small"
          >
            <span class="btnImg delete"></span>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>
<script>
const desserts = [
  {
    no: 1,
    class: "	AD1234567",
    num: "AD1234567",
    time: "2024/07/01 09:10:05",
    return: "2024/07/01 09:10:05",
    name: "	黃Ｏ玫",
    status: true,
  },
  {
    no: 2,
    class: "	AD1234567",
    num: "AD1234567",
    time: "2024/07/01 09:10:05",
    return: "2024/07/01 09:10:05",
    name: "	黃Ｏ玫",
    status: false,
  },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      {
        title: "序號",
        key: "no",
        align: "center",
        sortable: false,
        width: 100,
      },
      {
        title: "充電櫃編號",
        width: 200,
        key: "class",
        align: "center",
        sortable: false,
      },
      {
        title: "設備代碼",
        width: 200,
        key: "num",
        align: "center",
        sortable: false,
      },
      {
        title: "借閱人",
        key: "name",
        width: 200,
        align: "center",
        sortable: false,
        width: 100,
      },
      {
        title: "借閱時間",
        key: "time",
        align: "center",
        sortable: false,
        width: 200,
      },
      {
        title: "歸還時間",
        key: "return",
        align: "center",
        sortable: false,
        width: 100,
      },
      {
        title: "狀態",
        key: "status",
        align: "center",
        sortable: false,
        width: 100,
      },
      {
        title: "維護",
        key: "status",
        align: "center",
        sortable: false,
        width: 100,
      },
      {
        title: "刪除",
        key: "status",
        align: "center",
        sortable: false,
        width: 100,
      },
    ],
    customItemsPerPageText: "每頁顯示項目",
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
  computed: {},
};
</script>
