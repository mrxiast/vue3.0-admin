<template>
  <div class="container">
    <h2 class="page-title">Commission</h2>
    <div class="top-box">
      <el-card>
        <div class="filtter-box">
          <div class="input-box">
            <el-input v-model="mobileNumber" placeholder="Search Mobile Number" />
          </div>

          <div class="btn">
            <el-button type="primary" @click="search">Search</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="table-box">
      <el-card>
        <el-table v-loading="listLoading" :data="tableList" element-loading-text="Loading" border highlight-current-row>
          <el-table-column label="Mobile number" align="center" width="150px">
            <template #default="scope">
              <el-link type="primary">
                <router-link to="/branch/detail">{{ scope.row.branchId }}</router-link>
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="User Type" align="center" />
          <el-table-column prop="mobile" label="User Name" align="center" />
          <el-table-column prop="agentId" label="Transaction ID" align="center" />
          <el-table-column prop="agentId" label="Transaction Date" align="center" />
          <el-table-column align="center" label="Commission Amount"></el-table-column>
          <el-table-column align="center" label="Commission Type"></el-table-column>
          <el-table-column align="center" label="Currency"></el-table-column>
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
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { Pagination },
  setup(props, context) {
    const state = reactive({
      tableList: [{ name: '01' }],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      mobileNumber: ''
    })
    const $router = useRouter()
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
