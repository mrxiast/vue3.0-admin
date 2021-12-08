<template>
  <div class="container">
    <h2 class="page-title">Agent Cash Out</h2>
    <div class="top-box">
      <el-card>
        <div class="filtter-box">
          <div class="input-box">
            <el-input v-model="transactionId" placeholder="Search Transaction ID" />
          </div>
          <div class="select-box">
            <el-date-picker
              v-model="dateTime"
              type="daterange"
              unlink-panels
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              :shortcuts="shortcuts"
            ></el-date-picker>
          </div>
          <div class="btn">
            <el-button type="primary" @click="search">Search</el-button>
            <el-button type="warning" @click="exportFile">Export</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="table-box">
      <el-card>
        <el-table
          v-loading="listLoading"
          :data="tableList"
          element-loading-text="Loading"
          border
          highlight-current-row
          @row-click="goDetail"
        >
          <el-table-column label="Transaction ID" align="center" width="150px">
            <template #default="scope">
              <el-link type="primary">
                <router-link to="/branch/detail">{{ scope.row.branchId }}</router-link>
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Transaction Date" align="center" />
          <el-table-column prop="mobile" label="Agent Name" align="center" />
          <el-table-column prop="agentId" label="Request Amount" align="center" />
          <el-table-column prop="agentId" label="Patner ID" align="center" />
          <el-table-column align="center" label="Service Charge"></el-table-column>
          <el-table-column align="center" label="Rebate"></el-table-column>
          <el-table-column align="center" label="Channel Cost"></el-table-column>
          <el-table-column align="center" label="Action"></el-table-column>
        </el-table>
        <Pagination :total="total" :page="pageNum" :limit="pageSize" @pagination="changePageFetching" />
      </el-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

import Pagination from '@/views/components/pagination'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { Pagination },
  setup(props, context) {
    const state = reactive({
      tableList: [{ name: '01' }],
      transactionId: '',
      dateTime: '',
      pageNum: 1,
      pageSize: 10,
      total: 0
    })
    const $router = useRouter()
    const search = () => {}
    const exportFile = () => {}
    const getList = () => {}
    const changePageFetching = () => {}
    const goDetail = (row) => {
      $router.push(`/transactions/cash-out/agent-cash-out-detail/123`)
    }
    return {
      ...toRefs(state),
      search,
      exportFile,
      changePageFetching,
      goDetail
    }
  }
})
</script>

<style scoped src="./index.scss"></style>
