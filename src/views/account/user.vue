<template>
  <div class="app-container">

    <div class="filter-container">
      <el-input v-model="listQuery.mobileNo" placeholder="Mobile" style="width: 200px;" class="filter-item"
                @keyup.enter.native="handleFilter"/>
      <el-select v-model="listQuery.type" placeholder="User Type" clearable style="width: 130px" class="filter-item"
                 @change="handleFilter"
      >
        <el-option v-for="item in userTypeMinOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
      </el-select>
      <el-select v-model="listQuery.role" placeholder="Select role" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in roleOptions" :key="item.name" :label="item.name" :value="item.name"/>
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit"
                 @click="handleCreate">
        Add New User
      </el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border highlight-current-row>
      <el-table-column prop="username" label="User Name" align="center"/>
      <el-table-column prop="firstName" label="First Name" align="center"/>
      <el-table-column prop="lastName" label="Last Name" align="center"/>
      <el-table-column prop="agentName" v-if="listQuery.type===1" label="Agent Name" align="center" width="100"/>
      <el-table-column prop="branchName" v-if="listQuery.type===1" label="Branch Name" align="center" width="100"/>
      <el-table-column prop="mobile" label="Mobile" align="center" width="100"/>
      <el-table-column prop="email" label="E-mail" align="center" width="150"/>
      <el-table-column label="Add Date" align="center" width="150">
        <template #default="scope">
          <i class="el-icon-time"/>
          {{ scope.row.createdAt }}
        </template>
      </el-table-column>
      <el-table-column label="Status" align="center">
        <template #default="scope">
          <el-tag :type="commonStatusFilter(scope.row.status).el_type">
            {{ commonStatusFilter(scope.row.status).display_name }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="roleName" label="Role" align="center"/>
      <el-table-column label="Actions" align="center" width="150" class="small-padding fixed-width">
        <template #default="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">
            Edit
          </el-button>
          <el-popconfirm
              confirm-button-text="Confirm"
              cancel-button-text="Cancel"
              :title="'Are you sure to ' + (scope.row.status?'Block':'Active') + ' this user?'"
              @confirm="handleModifyStatus(scope.row, !scope.row.status)"
          >
            <template #reference>
              <el-button v-if="scope.row.status===false" size="mini" type="success">
                Active
              </el-button>
              <el-button v-else size="mini" type="warning">
                Block
              </el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
    <pagination
        v-show="total>0"
        :total="total"
        :page="listQuery.page"
        :limit="listQuery.size"
        @pagination="changePageFetching"/>

    <el-dialog :title="textMap[dialogStatus]" v-model="dialogFormVisible">
      <el-form
          :rules="formRulesMixin"
          ref="dataForm"
          :model="userForm"
          label-position="left"
          label-width="70px"
          style="width: 400px; margin-left: 50px"
      >
        <!-- TODO: filtering branch -->
        <el-form-item v-if="listQuery.type===1" label="Branch:" :rules="formRulesMixin.isNotNull" label-width="90px">
          <el-select
              v-model="userForm.roleId"
              class="filter-item"
              placeholder="Please select branch"
              multiple
          >
            <el-option
                v-for="item in roleOptions"
                :key="item.name"
                :label="item.name"
                :value="item.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item v-if="dialogStatus==='create'" label="User name" prop="username" :rules="formRulesMixin.isNotNull"
                      label-width="90px">
          <el-input v-model="userForm.username"/>
        </el-form-item>
        <el-form-item label="First name" prop="firstName" :rules="formRulesMixin.isNotNull" label-width="90px">
          <el-input v-model="userForm.firstName"/>
        </el-form-item>
        <el-form-item label="Last name" prop="lastName" :rules="formRulesMixin.isNotNull" label-width="90px">
          <el-input v-model="userForm.lastName"/>
        </el-form-item>
        <el-form-item v-if="dialogStatus==='create'" label="Mobile" prop="phone" :rules="formRulesMixin.isNotNull"
                      label-width="90px">
          <el-input v-model="userForm.phone"/>
        </el-form-item>
        <el-form-item v-if="dialogStatus==='create'" label="E-mail" prop="email" :rules="formRulesMixin.emailValid"
                      label-width="90px">
          <el-input v-model="userForm.email"/>
        </el-form-item>
        <el-form-item label="Role:" prop="roleId" :rules="formRulesMixin.isNotNull" label-width="90px">
          <el-select
              v-model="userForm.roleId"
              class="filter-item"
              placeholder="Please select role"
          >
            <el-option
                v-for="item in roleOptions"
                :key="item.name"
                :label="item.name"
                :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false"> Cancel</el-button>
          <el-button
              type="primary"
              @click="dialogStatus === 'create' ? createData() : updateData()"
          >
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "user",
}
</script>

<script setup>
import {toRefs, reactive, onBeforeMount, getCurrentInstance} from 'vue'
import {createUserReq, getListReq, updateUserReq, updateUserStatusReq} from "@/api/user"
import {getRoleListReq} from "@/api/role";
import {userTypeMinOptions, commonStatusFilter} from "@/utils/const";
import Pagination from '@/components/Pagination'

let {proxy} = getCurrentInstance()

const textMap = {
  update: 'Edit user',
  create: 'Add user'
}

const state = reactive({
  // account type: 0: internal, 1: master agent, 2: agent
  list: [],
  listLoading: true,
  total: 0,
  listQuery: {
    type: 0,
    page: 1,
    size: 20,
    mobileNo: '',
    role: ''
  },
  roleOptions: [],
  dialogStatus: '',
  dialogFormVisible: false,
  userForm: {
    username: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    nationalityAlias: '+63',
    type: 0,
    branchId: '',
    roleId: '',
  },
})

onBeforeMount(() => {
  fetchData()
  getRoleListReq().then(res => {
    state.roleOptions = res.data.content
  })
})

const fetchData = () => {
  state.listLoading = true
  getListReq(state.listQuery).then((res) => {
    state.list = res.data?.content
    state.listLoading = false
    state.total = res.data?.totalElements
  })
}

const changePageFetching = (data) => {
  state.listQuery.page = data.page
  state.listQuery.size = data.limit
  fetchData()
}

const handleFilter = () => {
  fetchData()
}

const handleModifyStatus = (row, status) => {
  updateUserStatusReq(row.id, status).then(() => {
    row.status = status
    proxy.$notify({
      title: 'Success',
      message: 'User status updated successfully',
      type: 'success'
    })
  })
}

const resetTemp = () => {
  state.userForm = {
    username: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    nationalityAlias: '+63',
    type: 0,
    branchId: '',
    roleId: '',
  }
}

const handleCreate = () => {
  resetTemp()
  state.dialogStatus = 'create'
  state.dialogFormVisible = true
  proxy.$nextTick(() => {
    proxy.$refs['dataForm'].clearValidate()
  })
}
const createData = () => {
  proxy.$refs['dataForm'].validate((valid) => {
    if (valid) {
      createUserReq(state.userForm).then(() => {
        state.dialogFormVisible = false
        proxy.$notify({
          title: 'Success',
          message: 'Created Successfully',
          type: 'success',
          duration: 2000
        })
        fetchData()
      })
    }
  })
}
const handleUpdate = (row) => {
  state.userForm = {
    id: row.id,
    firstName: row.firstName,
    lastName: row.lastName,
    branchId: row.branchId,
    roleId: row.roleId,
  }
  state.dialogStatus = 'update'
  state.dialogFormVisible = true
  proxy.$nextTick(() => {
    proxy.$refs['dataForm'].clearValidate()
  })
}
const updateData = () => {
  proxy.$refs['dataForm'].validate((valid) => {
    if (valid) {
      const tempData = Object.assign({}, state.userForm)
      updateUserReq(tempData.id, tempData).then(() => {
        state.dialogFormVisible = false
        proxy.$notify({
          title: 'Success',
          message: 'Update Successfully',
          type: 'success',
          duration: 2000
        })
      })
    }
  })
}

let {list, listLoading, total, listQuery, roleOptions, dialogStatus, dialogFormVisible, userForm} = toRefs(state)
</script>

<style scoped>

</style>