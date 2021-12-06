<template>
  <el-form
      :rules="formRulesMixin"
      ref="dataForm"
      :model="branchForm"
      label-position="top"
      label-width="70px"
      style="margin: 50px 0 0 50px"
  >
    <el-form-item label="Branch Name:" :rules="formRulesMixin.isNotNull" prop="name">
      <el-input v-model="branchForm.name" placeholder="branch name"/>
    </el-form-item>
    <el-form-item label="User Name:" :rules="formRulesMixin.isNotNull" prop="username">
      <el-input v-model="branchForm.username" placeholder="username"/>
    </el-form-item>
    <el-form-item label="First contact" :rules="formRulesMixin.isNotNull" prop="firstName">
      <el-input v-model="branchForm.firstName" placeholder="first name"/>
    </el-form-item>
    <el-form-item :rules="formRulesMixin.isNotNull" prop="lastName">
      <el-input v-model="branchForm.lastName" placeholder="last name"/>
    </el-form-item>
    <el-form-item :rules="formRulesMixin.isNotNull" prop="phone">
      <el-input v-model="branchForm.phone" placeholder="phone"/>
    </el-form-item>
    <el-form-item :rules="formRulesMixin.isNotNull" prop="email">
      <el-input v-model="branchForm.email" placeholder="email"/>
    </el-form-item>
    <el-form-item label="Branch Location" :rules="formRulesMixin.isNotNull" prop="locationDto.region">
      <el-select v-model="branchForm.locationDto.region" value-key="name" placeholder="Region"
                 @change="getLocation(1, branchForm.locationDto.region.id)">
        <el-option
            v-for="item in locations.region"
            :key="item.id"
            :label="item.name"
            :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item :rules="formRulesMixin.isNotNull" prop="locationDto.province">
      <el-select v-model="branchForm.locationDto.province" value-key="name" placeholder="Province"
                 @change="getLocation(2, branchForm.locationDto.province.id)">
        <el-option
            v-for="item in locations.province"
            :key="item.id"
            :label="item.name"
            :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item :rules="formRulesMixin.isNotNull" prop="locationDto.city">
      <el-select v-model="branchForm.locationDto.city" value-key="name" placeholder="City"
                 @change="getLocation(3, branchForm.locationDto.city.id)">
        <el-option
            v-for="item in locations.city"
            :key="item.id"
            :label="item.name"
            :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item :rules="formRulesMixin.isNotNull" prop="locationDto.brangay">
      <el-select v-model="branchForm.locationDto.brangay" value-key="name" placeholder="Brangay">
        <el-option
            v-for="item in locations.brangay"
            :key="item.id"
            :label="item.name"
            :value="item">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item :rules="formRulesMixin.isNotNull" prop="locationDto.address">
      <el-input v-model="branchForm.locationDto.address" placeholder="Address"/>
    </el-form-item>
    <el-button type="primary" @click="submit">Confirm</el-button>
  </el-form>
</template>

<script>
export default {
  name: "create-branch"
}
</script>

<script setup>

import {getCurrentInstance, onBeforeMount, reactive, ref} from "vue";
import {useStore} from "vuex";
import {getLocationReq} from "@/api/location";
import {createBranchReq} from "@/api/branch";

const store = useStore();
let {proxy} = getCurrentInstance()

const locations = reactive({
  region: [],
  province: [],
  brangay: [],
  city: [],
})

onBeforeMount(() => {
  getLocationReq().then(response => {
    locations.region = response.data
  })
});

const locationLevelMap = {
  0: 'region',
  1: 'province',
  2: 'city',
  3: 'brangay'
}

const getLocation = (level, parentId) => {
  getLocationReq(level, parentId).then(response => {
    locations[locationLevelMap[level]] = response.data
  })
}

const branchForm = reactive({
  username: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  nationalityAlias: '+63',
  name: '',
  locationDto: {
    region: null,
    province: null,
    city: null,
    brangay: null,
    address: '',
  },
})

const submit = () => {
  proxy.$refs['dataForm'].validate(valid => {
    if (valid) {
      branchForm.locationDto = {
        region: branchForm.locationDto.region.name,
        province: branchForm.locationDto.province.name,
        city: branchForm.locationDto.city.name,
        brangay: branchForm.locationDto.brangay.name,
        address: branchForm.locationDto.address,
      }
      createBranchReq(branchForm).then(res => {
        proxy.$notify({
          title: 'Success',
          message: 'Branch created successfully',
          type: 'success'
        })
        proxy.$router.push('/branch/index')
      })
    }
  })
}

</script>

<style lang="scss" scoped>
.el-form-item {
  .el-input {
    width: 60%;
  }

  .el-select {
    width: 60%;
  }
}
</style>