<template>
  <h3 class="text-lg text-white mb-6 px-4 py-3 bg-blue-900">
    User Table
  </h3>
  <div class="flex flex-wrap">
    <div class="w-1/2">
      <div>
        <label class="text-base mr-2">Search User</label
        ><input
          class="px-2 py-2 border border-blue-600 rounded-md focus:outline-none"
          v-model="searchTerm"
        />
      </div>
    </div>
    <div class="w-1/2">
      <div class="flex justify-end">
        <div>
          <button
            @click="showModal"
            class="px-4 py-3 bg-blue-900 text-white rounded"
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  </div>
  <Modal v-show="isModalVisible" @close="closeModal">
    <template v-slot:header>
      Add User Form
    </template>

    <template v-slot:body>
      <p>asdasdasd</p>
      <input type="text">
    </template>
    

    <template v-slot:footer>
      Need me?
    </template>
  </Modal>
  <table-lite
    :is-static-mode="true"
    :has-checkbox="true"
    :columns="table2.columns"
    :rows="table2.rows"
    :total="table2.totalRecordCount"
    :sortable="table2.sortable"
    @return-checked-rows="updateCheckedRows"
  ></table-lite>
</template>
<script>
import TableLite from "../component/TableLite.vue";
import { defineComponent, reactive, ref, computed } from "vue";

//this is sample dataset 1 but it has no effect the table we are viewing
//we will remove it --
const sampleData1 = (offst, limit) => {
  offst = offst + 1;
  let data = [];
  for (let i = offst; i <= limit; i++) {
    data.push({
      id: i,
      name: "Test" + i,
      email: "Test" + i + "@example.com",
    });
  }
  return data;
};
const sampleData2 = (offst, limit) => {
  let data = [];
  for (let i = limit; i > offst; i--) {
    data.push({
      id: i,
      name: "Codemen Engineer" + i,
      email: "codemen" + i + "@example.com",
    });
  }
  return data;
};
import Modal from "../component/Modal.vue";
export default defineComponent({
  name: "MemberList",
  components: {
    TableLite,
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  setup() {
    ////////////////////////////
    //
    //

    const table = reactive({
      isLoading: false,
      isReSearch: false,
    });
    const doSearch = (offset, limit, order, sort) => {
      table.isLoading = true;
      setTimeout(() => {
        table.isReSearch = offset == undefined ? true : false;
        if (offset >= 10 || limit >= 20) {
          limit = 20;
        }
        if (sort == "asc") {
          table.rows = sampleData1(offset, limit);
        } else {
          table.rows = sampleData2(offset, limit);
        }
        table.totalRecordCount = 20;
        table.sortable.order = order;
        table.sortable.sort = sort;
      }, 600);
    };
    /**
     *
     *
     * @param Collection
     */
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("name-btn")) {
          element.addEventListener("click", function() {
            console.log(this.dataset.id + " name-btn click!!");
          });
        }
        if (element.classList.contains("quick-btn")) {
          element.addEventListener("click", function() {
            console.log(this.dataset.id + " quick-btn click!!");
          });
        }
      });
    };
    /**
     */
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };
    //
    //  Table2
    const searchTerm = ref(""); // (Search text)
    const data = reactive([]); // (Fake data)
    for (let i = 0; i < 126; i++) {
      data.push({
        id: i,
        name: "Codemen Engineer" + i,
        email: "codemen" + i + "@example.com",
        date: "19/11/1991",
        role: "Employee",
      });
    }
    const table2 = reactive({
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Name",
          field: "name",
          width: "15%",
          sortable: true,
          display: function(row) {
            return (
              '<a href="#" data-id="' +
              row.user_id +
              '" class="is-rows-el name-btn">' +
              row.name +
              "</a>"
            );
          },
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true,
        },
        {
          label: "Date Joined",
          field: "date",
          width: "15%",
          sortable: true,
        },
        {
          label: "Role",
          field: "role",
          width: "10%",
          sortable: true,
        },
        {
          label: "Action",
          field: "quick",
          width: "10%",
          display: function(row) {
            return (
              '<button type="button" data-id="' +
              row.user_id +
              '" class="is-rows-el quick-btn text-blue-900 text-sm font-bold">Update</button>'
            );
          },
        },
        {
          label: "Action",
          field: "quick",
          width: "10%",
          display: function(row) {
            return (
              '<button type="button" data-id="' +
              row.user_id +
              '" class="is-rows-el quick-btn text-blue-900 text-sm font-bold">Delete</button>'
            );
          },
        },
      ],
      rows: computed(() => {
        return data.filter(
          (x) =>
            x.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            x.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      }),
      totalRecordCount: computed(() => {
        return table2.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc",
      },
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data",
      },
    });
    return {
      searchTerm,
      table,
      table2,
      doSearch,
      tableLoadingFinish,
      updateCheckedRows,
    };
  },
});
</script>
