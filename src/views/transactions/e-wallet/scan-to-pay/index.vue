<template>
  <div class="container">
    <h2 class="page-title">Scan to Pay</h2>
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
        <el-table v-loading="listLoading" :data="tableList" element-loading-text="Loading" border highlight-current-row>
          <el-table-column label="Transaction ID" align="center" width="150px">
            <template #default="scope">
              <el-link type="primary">
                <router-link to="/branch/detail">{{ scope.row.branchId }}</router-link>
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Transaction Date" align="center" />
          <el-table-column prop="mobile" label="Transaction Amount" align="center" />
          <el-table-column prop="agentId" label="Service Charge" align="center" />
          <el-table-column align="center" label="Total Amount"></el-table-column>
          <el-table-column prop="createdAt" label="Sender's Name" align="center" />
          <el-table-column align="center" label="Recevier's Name"></el-table-column>
          <el-table-column align="center" label="Channel"></el-table-column>
          <el-table-column align="center" label="Sender's Wallet Balance"></el-table-column>
          <el-table-column align="center" label="Receiver's Wallet Balance"></el-table-column>
          <el-table-column align="center" label="Status"></el-table-column>
        </el-table>
        <Pagination :total="total" :page="pageNum" :limit="pageSize" @pagination="changePageFetching" />
      </el-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

import Pagination from '@/views/components/pagination'

export default defineComponent({
  components: { Pagination },
  setup(props, context) {
    const state = reactive({
      tableList: [],
      transactionId: '',
      dateTime: '',
      pageNum: 1,
      pageSize: 10,
      total: 0
    })
    const search = () => {}
    const exportFile = () => {}
    const getList = () => {}
    const changePageFetching = () => {}
    return {
      ...toRefs(state),
      search,
      exportFile,
      changePageFetching
    }
  }
})
</script>

<style scoped src="./index.scss"></style>
