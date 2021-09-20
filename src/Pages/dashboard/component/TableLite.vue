<template>
  <div class="card">
    <div class="" v-if="title">{{ title }}</div>
    <div class="card-body">
      <p class="card-title"></p>
      <div
        id=""
        class=""
      >
        <div class="row"></div>
        <div class="row">
          <div class="col-sm-12 overflow-x-scroll">
            <div class="row"></div>
            <div v-if="isLoading" class="loading-mask">
              <div class="loading-content">
                <span style="color: white">Loading...</span>
              </div>
            </div>
            <table cellspacing="0" cellpadding="0"
              class="table table-hover table-bordered table-responsive-sm "
              id="dataTables-example"
              
            >
              <thead class="thead-dark">
                <tr>
                  <th v-if="hasCheckbox" class="checkbox-th">
                    <div>
                      <input type="checkbox" v-model="setting.isCheckAll" />
                    </div>
                  </th>
                  <th
                    v-for="(col, index) in columns"
                    :key="index"
                    :style="{ width: col.width ? col.width : 'auto' }"
                  >
                    <div
                      :class="{
                        sortable: col.sortable,
                        both: col.sortable,
                        asc: setting.order === col.field && setting.sort === 'asc',
                        desc: setting.order === col.field && setting.sort === 'desc',
                      }"
                      @click="col.sortable ? doSort(col.field) : false"
                    >
                      {{ col.label }}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody v-if="rows.length > 0">
                <template v-if="isStaticMode">
                  <tr v-for="(row, i) in localRows" :key="i">
                    <td v-if="hasCheckbox">
                      <div>
                        <input
                          type="checkbox"
                          :ref="
                            (el) => {
                              rowCheckbox[i] = el;
                            }
                          "
                          :value="row[setting.keyColumn]"
                          @click="checked"
                        />
                      </div>
                    </td>
                    <td v-for="(col, j) in columns" :key="j">
                      <div v-if="col.display" v-html="col.display(row)"></div>
                      <span v-else>{{ row[col.field] }}</span>
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr v-for="(row, i) in rows" :key="i">
                    <td v-if="hasCheckbox">
                      <div>
                        <input
                          type="checkbox"
                          :ref="
                            (el) => {
                              rowCheckbox[i] = el;
                            }
                          "
                          :value="row[setting.keyColumn]"
                          @click="checked"
                        />
                      </div>
                    </td>
                    <td v-for="(col, j) in columns" :key="j">
                      <div v-if="col.display" v-html="col.display(row)"></div>
                      <span v-else>{{ row[col.field] }}</span>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
        <hr class="my-4 w="/>
        <div class="row" v-if="rows.length > 0">
          <div class="col-sm-12 col-md-4 text-sm font-bold mt-3">
            <div role="status" aria-live="polite">
              {{
                stringFormat(messages.pagingInfo, setting.offset, setting.limit, total)
              }}
            </div>
          </div>
          <div class="col-sm-12 col-md-4 text-sm font-bold mt-3">
            <span class="mx-2">{{ messages.pageSizeChangeLabel }}</span>
            <select class="mx-2" v-model="setting.pageSize">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span >{{ messages.gotoPageLabel }}</span>
            <select class="mx-2" v-model="setting.page">
              <option v-for="n in setting.maxPage" :key="n">{{ n }}</option>
            </select>
          </div>
          <div class="col-sm-12 col-md-4">
            <div
              class="dataTables_paginate paging_simple_numbers"
              id="dataTables-example_paginate"
            >
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: setting.page <= 1 }">
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Previous"
                    @click="setting.page = 1"
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">First</span>
                  </a>
                </li>
                <li class="page-item" :class="{ disabled: setting.page <= 1 }">
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Previous"
                    @click="prevPage"
                  >
                    <span aria-hidden="true">&lt;</span>
                    <span class="sr-only">Prev</span>
                  </a>
                </li>
                <li
                  class="page-item"
                  v-for="n in setting.paging"
                  :key="n"
                  :class="{ disabled: setting.page === n }"
                >
                  <a class="page-link" href="javascript:void(0)" @click="movePage(n)">{{
                    n
                  }}</a>
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: setting.page >= setting.maxPage }"
                >
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Next"
                    @click="nextPage"
                  >
                    <span aria-hidden="true">&gt;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: setting.page >= setting.maxPage }"
                >
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    aria-label="Next"
                    @click="setting.page = setting.maxPage"
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Last</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-sm-12 text-center">
            {{ messages.noDataAvailable }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  onBeforeUpdate,
  nextTick,
} from "vue";
interface tableSetting {
  isCheckAll: boolean;
  keyColumn: string;
  page: number;
  pageSize: number;
  maxPage: number;
  offset: number;
  limit: number;
  paging: Array<number>;
  order: string;
  sort: string;
}
interface column {
  isKey: string;
  field: string;
}
export default defineComponent({
  name: "my-table",
  emits: ["return-checked-rows", "do-search", "is-finished"],
  props: {
    // (is data loading)
    isLoading: {
      type: Boolean,
      require: true,
    },
    // (Whether to perform a re-query)
    isReSearch: {
      type: Boolean,
      require: true,
    },
    // Checkbox (Presence of Checkbox)
    hasCheckbox: {
      type: Boolean,
      default: false,
    },
    // (title)
    title: {
      type: String,
      default: "",
    },
    // (Field)
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // (data)
    rows: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 一(Display the number of items on one page)
    pageSize: {
      type: Number,
      default: 10,
    },
    // (Total number of transactions)
    total: {
      type: Number,
      default: 100,
    },
    // (Current page number)
    page: {
      type: Number,
      default: 1,
    },
    // (Sort condition)
    sortable: {
      type: Object,
      default: () => {
        return {
          order: "id",
          sort: "asc",
        };
      },
    },
    // (Display text)
    messages: {
      type: Object,
      default: () => {
        return {
          pagingInfo: "Showing {0}to{1} of {2} results",
          pageSizeChangeLabel: "Row count:",
          gotoPageLabel: "Go to page:",
          noDataAvailable: "No data",
        };
      },
    },
    // (Static mode(no refresh server data))
    isStaticMode: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    //  (Internal set value for components)
    const setting: tableSetting = reactive({
      // (Whether to select all)
      isCheckAll: false,
      // (KEY field name)
      keyColumn: computed(() => {
        let key = "";
        Object.assign(props.columns).forEach((col: column) => {
          if (col.isKey) {
            key = col.field;
          }
        });
        return key;
      }),
      // (current page number)
      page: props.page,
      // (Display count per page)
      pageSize: props.pageSize,
      // (Maximum number of pages)
      maxPage: computed(() => {
        if (props.total <= 0) {
          return 0;
        }
        let maxPage = Math.floor(props.total / setting.pageSize);
        let mod = props.total % setting.pageSize;
        if (mod > 0) {
          maxPage++;
        }
        return maxPage;
      }),
      // (The starting value of the page number)
      offset: computed(() => {
        return (setting.page - 1) * setting.pageSize + 1;
      }),
      //  (Maximum number of pages0
      limit: computed(() => {
        let limit = setting.page * setting.pageSize;
        return props.total >= limit ? limit : props.total;
      }),
      // (Paging array)
      paging: computed(() => {
        let startPage = setting.page - 2 <= 0 ? 1 : setting.page - 2;
        if (setting.maxPage - setting.page <= 2) {
          startPage = setting.maxPage - 4;
        }
        startPage = startPage <= 0 ? 1 : startPage;
        let pages = [];
        for (let i = startPage; i <= setting.maxPage; i++) {
          if (pages.length < 5) {
            pages.push(i);
          }
        }
        return pages;
      }),
      // (Sortable for local)
      order: props.sortable.order,
      sort: props.sortable.sort,
    });
    // (Data rows for local)
    const localRows = computed(() => {
      // sort rows
      let property = setting.order;
      let sort_order = 1;
      if (setting.sort === "desc") {
        sort_order = -1;
      }
      let rows = props.rows as Array<unknown>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rows.sort((a: any, b: any): number => {
        if (a[property] < b[property]) {
          return -1 * sort_order;
        } else if (a[property] > b[property]) {
          return sort_order;
        } else {
          return 0;
        }
      });
      // return sorted and offset rows
      let result = [];
      for (let index = setting.offset - 1; index < setting.limit; index++) {
        if (rows[index]) {
          result.push(rows[index]);
        }
      }
      return result;
    });
    ////////////////////////////
    //
    //  Checkbox 
    //  (Checkbox related operations)
    //
    //  (Define Checkbox reference)
    const rowCheckbox = ref([]);
    if (props.hasCheckbox) {
      /**
       * (Execute before re-rendering)
       */
      onBeforeUpdate(() => {
        //  (Clear all values before each update)
        rowCheckbox.value = [];
      });
      /**
       *(Check all checkboxes for monitoring)
       */
      watch(
        () => setting.isCheckAll,
        (state: boolean) => {
          let isChecked: Array<string> = [];
          rowCheckbox.value.forEach((val: HTMLInputElement) => {
            if (val) {
              val.checked = state;
              if (val.checked) {
                isChecked.push(val.value);
              }
            }
          });
          // (Return the selected data on the screen)
          emit("return-checked-rows", isChecked);
        }
      );
    }
    /**
     * (Checkbox click event)
     */
    const checked = () => {
      let isChecked: Array<string> = [];
      rowCheckbox.value.forEach((val: HTMLInputElement) => {
        if (val && val.checked) {
          isChecked.push(val.value);
        }
      });
      // (Return the selected data on the screen)
      emit("return-checked-rows", isChecked);
    };
    /**
     * (Clear all selected data on the screen)
     */
    const clearChecked = () => {
      rowCheckbox.value.forEach((val: HTMLInputElement) => {
        if (val && val.checked) {
          val.checked = false;
        }
      });
      // (Return the selected data on the screen)
      emit("return-checked-rows", []);
    };
    ////////////////////////////
    //
    //  
    //  (Sorting, page change, etc. related operations)
    //
    /**
     * (Call execution sequencing)
     */
    const doSort = (order: string) => {
      let sort = "asc";
      if (order == setting.order) {
        // (When sorting items)
        if (setting.sort == "asc") {
          sort = "desc";
        }
      }
      let offset = (setting.page - 1) * setting.pageSize;
      let limit = setting.pageSize;
      setting.order = order;
      setting.sort = sort;
      emit("do-search", offset, limit, order, sort);
      // (Clear the selected data on the screen)
      if (setting.isCheckAll) {
        //  (It will be cleared when you cancel all selections)
        setting.isCheckAll = false;
      } else {
        if (props.hasCheckbox) {
          clearChecked();
        }
      }
    };
    /**
     * (Switch page number)
     *
     * @param page      number   (New page number)
     * @param prevPage  number  (Current page number)
     */
    const changePage = (page: number, prevPage: number) => {
      setting.isCheckAll = false;
      let order = setting.order;
      let sort = setting.sort;
      let offset = (page - 1) * setting.pageSize;
      let limit = setting.pageSize;
      if (!props.isReSearch || page > 1 || page == prevPage) {
        // (Call query will only be executed if the page number is changed without re-query)
        emit("do-search", offset, limit, order, sort);
      }
    };
    // (Monitor page switching)
    watch(() => setting.page, changePage);
    /**
     * (Switch display number)
     */
    const changePageSize = () => {
      if (setting.page === 1) {
        //  changePage
        changePage(setting.page, setting.page);
      } else {
        // changePage()
        setting.page = 1;
        setting.isCheckAll = false;
      }
    };
    // (Monitor display number switch)
    watch(() => setting.pageSize, changePageSize);
    /**
     * (Previous page)
     */
    const prevPage = () => {
      if (setting.page == 1) {
        // (If it is the first page, it will not be executed)
        return false;
      }
      setting.page--;
    };
    /**
     * (Move to the specified number of pages)
     */
    const movePage = (page: number) => {
      setting.page = page;
    };
    /**
     * (Next page)
     */
    const nextPage = () => {
      if (setting.page >= setting.maxPage) {
        // (If it is equal to or greater than the maximum number of pages, no execution)
        return false;
      }
      setting.page++;
    };
    // (Monitoring data changes)
    watch(
      () => props.rows,
      () => {
        if (props.isReSearch) {
          setting.page = 1;
        }
        nextTick(function () {
          // (Return the private components after the data is rendered)
          let localElement = document.getElementsByClassName("is-rows-el");
          emit("is-finished", localElement);
        });
      }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stringFormat = (template: string, ...args: any[]) => {
      return template.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
      });
    };
    if (props.hasCheckbox) {
      // (When Checkbox is needed)
      return {
        localRows,
        setting,
        rowCheckbox,
        checked,
        doSort,
        prevPage,
        movePage,
        nextPage,
        stringFormat,
      };
    } else {
      return {
        localRows,
        setting,
        doSort,
        prevPage,
        movePage,
        nextPage,
        stringFormat,
      };
    }
  },
});
</script>

<style scoped>
.checkbox-th {
  width: 1%;
}
.both {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7X QMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC");
}
.sortable {
  cursor: pointer;
  background-position: right;
  background-repeat: no-repeat;
  padding-right: 30px !important;
}
.asc {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==);
}
.desc {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII=);
}
.loading-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: column;
  transition: opacity 0.3s ease;
}
.loading-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
/*.loading-icon {*/
/*  display: flex;*/
/*  margin-left: auto;*/
/*  margin-right: auto;*/
/*}*/
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  padding: 20px;
  border-radius: 25px;
  overflow-x:scroll ;
}
select {
  width: auto;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  height: auto;
  padding: 0;
  margin-bottom: 0;
}
table {
  width: 100%;
  margin-bottom: 1rem;
  color: #6B7280;
  border: none;
  
}
th {
  text-align: inherit;
  
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.table .thead-dark th {
  color: white;
  background-color: #686868;
  border-color: #D3D3D3;
  
}
.table-bordered thead td,
.table-bordered thead th {
  border-bottom-width: 2px;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}
.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
/*.table-border {*/
/*  border: 1px solid #dee2e6;*/
/*}*/
.table td,
.table th {
  vertical-align: middle;
}
.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
div.dataTables_wrapper div.dataTables_paginate {
  margin: 0;
  white-space: nowrap;
  text-align: right;
}
div.dataTables_wrapper div.dataTables_paginate ul.pagination {
  margin: 2px 0;
  white-space: nowrap;
  justify-content: flex-end;
}
.pagination {
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}
.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
*,
::after,
::before {
  box-sizing: border-box;
}
@media (min-width: 576px) {
  .col-sm-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}
</style>