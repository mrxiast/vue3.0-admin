<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="state.listQuery.type" placeholder="Department" clearable style="width: 130px"
                 class="filter-item"
                 @change="fetchData"
      >
        <el-option v-for="item in userTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
      </el-select>
      <router-link to="/account/create-role">
        <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit">
          Add New Role
        </el-button>
      </router-link>
    </div>

    <el-table :v-loading="state.listLoading" :data="state.list" border highlight-current-row>
      <el-table-column label="Department" prop="department">
        <template #default="scope">
          {{ userTypeOptionsMap[scope.row.department] }}
        </template>
      </el-table-column>
      <el-table-column label="Role Name" prop="name"/>
      <el-table-column label="Description" prop="description"/>
      <el-table-column label="Add Date">
        <template #default="scope">
          <i class="el-icon-time"/>
          {{ scope.row.createdAt }}
        </template>
      </el-table-column>
      <el-table-column label="Status">
        <template #default="scope">
          <el-tag :type="commonStatusFilter(scope.row.status).el_type">
            {{ commonStatusFilter(scope.row.status).display_name }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" class="small-padding fixed-width" width="250">
        <template #default="scope">
          <el-button type="primary" size="mini" @click="showDialog(scope.row)">
            Check Permission
          </el-button>
          <el-popconfirm
              confirm-button-text="Confirm"
              cancel-button-text="Cancel"
              :title="'Are you sure to ' + (scope.row.status?'Block':'Active') + ' this role?'"
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

    <el-dialog v-model="state.dialogTableVisible" title="Detail">
      <table>
        <tr>
          <th>Department</th>
          <td>{{ userTypeOptionsMap[selectedRow.department] }}</td>
        </tr>
        <tr>
          <th>Role description</th>
          <td>{{ selectedRow.description }}</td>
        </tr>
        <tr>
          <th>Permissions</th>
          <td>
            <div v-for="item in selectedRow.permissions">
              <el-checkbox style="display:block;" :key="item.id" :label="item.name" :disabled=true
                           v-model="alwaysChecked">
                {{ item.name }}
              </el-checkbox>
            </div>
          </td>
        </tr>
      </table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "role"
}
</script>

<script setup>
import {userTypeOptions, commonStatusFilter, userTypeOptionsMap} from "@/utils/const";
import {getCurrentInstance, onBeforeMount, reactive, ref} from "vue";
import {getPermissionListReq, getRoleListReq, updateRoleStatusReq} from "@/api/role";

let {proxy} = getCurrentInstance()

const state = reactive({
  list: [],
  listLoading: false,
  total: 0,
  listQuery: {
    type: ""
  },
  dialogTableVisible: false
});

const selectedRow = reactive({
  department: "",
  name: "",
  description: "",
  createdAt: "",
  statue: "",
  permissions: []
});

const alwaysChecked = ref(true);

onBeforeMount(() => {
  fetchData()
});

const fetchData = () => {
  state.listLoading = true
  getRoleListReq(state.listQuery).then((res) => {
    state.list = res.data?.content
    state.listLoading = false
    state.total = res.data?.totalElements
  })
}

const handleModifyStatus = (row, status) => {
  updateRoleStatusReq(row.id, status).then(() => {
    row.status = status
    proxy.$notify({
      title: 'Success',
      message: 'Role status updated successfully',
      type: 'success'
    })
  })
}

const showDialog = (row) => {
  state.dialogTableVisible = true
  Object.assign(selectedRow, row)
  getPermissionListReq({'roleId': row.id, 'size': 100}).then((res) => {
    selectedRow.permissions = res.data?.content
  })
}

</script>

<style scoped>
table, th, td {
  border-collapse: collapse;
  border: 1px solid black;
  padding: 6px;
}

table {
  width: 100%;
}

th {
  width: 150px;
}

td {
  text-align: center;
}
</style>