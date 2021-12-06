<template>
  <div class="filter-container">
    <el-input
      v-model="state.listQuery.branchId"
      placeholder="Search branch ID"
      style="width: 200px"
      class="filter-item"
      @keyup.enter.native="fetchData"
    />
    <el-input
      v-model="state.listQuery.name"
      placeholder="Search branch Name"
      style="width: 150px"
      class="filter-item"
      @keyup.enter.native="fetchData"
    />
    <el-select v-model="state.listQuery.type" placeholder="Agent type" clearable class="filter-item">
      <el-option v-for="item in agentTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
    </el-select>
    <el-select v-model="state.listQuery.status" placeholder="Status" clearable class="filter-item">
      <el-option v-for="item in commonStatusOptions" :key="item.key" :label="item.display_name" :value="item.key" />
    </el-select>
    <el-button class="filter-item" type="primary" icon="el-icon-search" @click="fetchData">Search</el-button>
    <router-link to="/branch/create-branch">
      <el-button class="filter-item" style="margin-left: 10px" type="primary" icon="el-icon-edit">Add Branch</el-button>
    </router-link>
  </div>

  <el-table
    v-loading="state.listLoading"
    :data="state.list"
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
    <el-table-column prop="mobile" label="Mobile No." align="center" width="100" />
    <el-table-column prop="agentId" label="Agent ID" align="center" />
    <el-table-column label="Agent Type" align="center">
      <template #default="scope">
        {{ agentTypeOptionsMap[scope.row.agentType] }}
      </template>
    </el-table-column>
    <el-table-column prop="createdAt" label="Add date" align="center" width="150" />
    <el-table-column label="Status" align="center">
      <template #default="scope">
        <el-tag :type="commonStatusFilter(scope.row.status).el_type">
          {{ commonStatusFilter(scope.row.status).display_name }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="Actions" align="center" class="small-padding fixed-width">
      <template #default="scope">
        <el-button
          size="mini"
          :type="scope.row.status === false ? 'success' : 'warning'"
          @click="toggleStatus(scope.row, !scope.row.status)"
        >
          {{ scope.row.status === false ? 'Active' : 'Block' }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <pagination
    v-show="state.total > 0"
    :total="state.total"
    :page="state.listQuery.page"
    :limit="state.listQuery.size"
    @pagination="changePageFetching"
  />
</template>

<script>
export default {
  name: 'index'
}
</script>

<script setup>
import { getCurrentInstance, onBeforeMount, reactive } from 'vue'
import { agentTypeOptions, commonStatusOptions, commonStatusFilter, agentTypeOptionsMap } from '@/utils/const'
import { branchListReq, updateBranchStatusReq } from '@/api/branch'
import Pagination from '@/components/Pagination'

let { proxy } = getCurrentInstance()

const state = reactive({
  list: [],
  listLoading: false,
  total: 0,
  listQuery: {
    page: 1,
    size: 20,
    branchId: '',
    name: '',
    type: '',
    status: ''
  }
})

const changePageFetching = (data) => {
  state.listQuery.page = data.page
  state.listQuery.size = data.limit
  fetchData()
}

onBeforeMount(() => {
  fetchData()
})

const fetchData = () => {
  state.listLoading = true
  branchListReq(state.listQuery)
    .then((res) => {
      state.list = res.data?.content
      state.total = res.data?.totalElements
      state.listLoading = false
    })
    .catch(() => {
      state.listLoading = false
    })
}

let toggleStatus = async (row, status) => {
  await proxy
    .elConfirmMixin(
      'Are you sure to ' + (row.status ? 'Block' : 'Active') + ' this branch',
      row.status ? 'Once this branch is blocked, court fee can not be paid via this branch' : 'Active this branch?'
    )
    .then(() => {
      updateBranchStatusReq(row.id, status).then(() => {
        row.status = status
        proxy.$notify({
          title: 'Success',
          message: 'Branch status updated successfully',
          type: 'success'
        })
      })
    })
    .catch((err) => {})
}
</script>

<style scoped></style>
