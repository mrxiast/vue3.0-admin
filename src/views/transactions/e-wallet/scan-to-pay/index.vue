<template>
  <div style="padding: 15px">
    <router-view>
      <div class="container">
        <!-- <my-btn>
      <template #header>name-slot</template>
      slot
    </my-btn> -->
        <div class="top-box">
          <el-card></el-card>
        </div>
        <div class="table-box">
          <el-card>
            <div class="table-title">
              <span class="title">Asset Overview</span>
              <span class="update-title">Last update：</span>
              <span>Jan-02 2021 12:00:00</span>
            </div>
            <el-table
              v-loading="listLoading"
              :data="tableList"
              element-loading-text="Loading"
              border
              highlight-current-row
            >
              <el-table-column label="Branch ID" align="center" width="150px">
                <template #default="scope">
                  <el-link type="primary">
                    <router-link to="/branch/detail">{{ scope.row.branchId }}</router-link>
                  </el-link>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="Branch Name" align="center" />
              <el-table-column prop="mobile" label="Mobile No." align="center" />
              <el-table-column prop="agentId" label="Agent ID" align="center" />
              <el-table-column label="Agent Type" align="center"></el-table-column>
              <el-table-column prop="createdAt" label="Add date" align="center" />
              <el-table-column label="Status" align="center"></el-table-column>
              <el-table-column label="Actions" align="center" class="small-padding fixed-width"></el-table-column>
            </el-table>
            <Pagination :total="total" :page="pageNum" :limit="pageSize" @pagination="changePageFetching" />
          </el-card>
        </div>
      </div>
    </router-view>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup(props, context) {
    const state = reactive({
      tableList: []
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped src="./index.scss"></style>
