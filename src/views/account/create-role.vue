<template>
  <el-form
      :rules="formRulesMixin"
      ref="dataForm"
      :model="roleForm"
      label-position="left"
      label-width="70px"
      style="margin: 50px 0 0 50px"
  >
    <el-form-item label="Select Department:" :rules="formRulesMixin.isNotNull" label-width="150px" prop="userType">
      <el-select v-model="roleForm.userType" style="width: 60%">
        <el-option v-for="item in filterUserTypeOptions()" :key="item.key" :label="item.display_name"
                   :value="item.key"/>
      </el-select>
    </el-form-item>
    <el-form-item label="Add role name:" :rules="formRulesMixin.isNotNull" label-width="150px" prop="name">
      <el-input v-model="roleForm.name" style="width: 60%"/>
    </el-form-item>
    <el-form-item label="Description:" :rules="formRulesMixin.isNotNull" label-width="150px" prop="description">
      <el-input v-model="roleForm.description" style="width: 60%"/>
    </el-form-item>
    <el-form-item label="Select Permission:" label-width="150px">
      <el-table :data="selectedPermissions" :show-header="false">
        <el-table-column align="center">
          <template #default="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column align="center">
          <template #default="scope">
            <el-radio-group v-model="selectedPermissions[scope.$index].type">
              <el-radio :label="item.key" v-for="item in permissionTypeOptions">{{ item.display_name }}</el-radio>
            </el-radio-group>
          </template>
        </el-table-column>
      </el-table>

    </el-form-item>
    <div class="rowCC">
      <el-button type="primary" @click="submit(roleForm)">Confirm</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "role-form"
}
</script>

<script setup>

import {getCurrentInstance, onBeforeMount, reactive, ref} from "vue";
import {userTypeOptions, permissionTypeOptions} from "@/utils/const";
import {useStore} from "vuex";
import {createRoleReq, getPermissionListReq} from "@/api/role";

const store = useStore();
let {proxy} = getCurrentInstance()

let permissions = ref([]);
let selectedPermissions = ref([]);

onBeforeMount(() => {
  getPermissionListReq({'size': 100}).then((res) => {
    permissions.value = res.data?.content
    selectedPermissions.value = res.data?.content
    for (let i = 0; i < selectedPermissions.value.length; i++) {
      selectedPermissions.value[i].type = false
    }
  })
});

const filterUserTypeOptions = () => {
  // internal type
  if (store.state.user.type === 0) {
    return userTypeOptions
  } else {
    return userTypeOptions.filter(item => item.key === store.state.user.type)
  }
}

const roleForm = reactive({
  userType: '',
  name: '',
  description: '',
  permissionDto: [],
})

const submit = (data) => {
  proxy.$refs['dataForm'].validate(valid => {
    if (valid) {
      let temp = Object.assign([], selectedPermissions.value)
      temp = temp.filter(
          item => {
            if (typeof item.type === 'string') {
              item.type = parseInt(item.type)
            }
            item.permissionId = item.id
            delete item.description
            delete item.name
            delete item.id
            return item.type !== false
          }
      )
      const body = {
        ...data,
        permissionDto: temp
      }
      createRoleReq(body).then(res => {
        proxy.$notify({
          title: 'Success',
          message: 'Create role successfully',
          type: 'success',
          duration: 2000
        })
        proxy.$router.push('/account/role')
      })
    }
  })
}

</script>

<style scoped>

</style>