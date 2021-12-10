<template>
  <div class="container">
    <h2 class="page-title">Merchant Management</h2>
    <div class="top-box">
      <el-card>
        <div class="filtter-box">
          <div class="input-box">
            <el-input v-model="userId" placeholder="Enter Merchant ID" />
          </div>
          <div class="input-box">
            <el-input v-model="referrerName" placeholder="Enter Merchant Mobile" />
          </div>
          <div class="input-box">
            <el-select v-model="industry" placeholder="Merchant Industry">
              <el-option
                v-for="item in industryList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="input-box">
            <el-select v-model="quali" placeholder="Merchant Qualification">
              <el-option
                v-for="item in qualiList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
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
            <el-button type="primary" @click="addMerchant">Add Merchant</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="table-box">
      <el-card>
        <el-table v-loading="listLoading" :data="tableList" element-loading-text="Loading" border highlight-current-row>
          <el-table-column label="Merchant Logo" align="center" width="150px">
            <template #default="scope">
              <el-link type="primary">
                <router-link to="/branch/detail">{{ scope.row.branchId }}</router-link>
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Merchant ID" align="center" />
          <el-table-column prop="mobile" label="Merchant Qualifications" align="center" />
          <el-table-column prop="agentId" label="Merchant Industry" align="center" />
          <el-table-column align="center" label="Mobile Number"></el-table-column>
          <el-table-column prop="createdAt" label="E-mail Address" align="center" />
          <el-table-column prop="createdAt" label="Approved Date" align="center" />
          <el-table-column prop="createdAt" label="Status" align="center" />
          <el-table-column label="Action" align="center">
            <template #default="scope">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link" style="cursor: pointer">· · ·</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item class="action-item" @click="goDetail(scope.row)">View</el-dropdown-item>
                    <el-dropdown-item class="action-item" @click="setActive(scope.row)">
                      {{ scope.row.status === '1' ? 'Block' : 'Active' }}
                    </el-dropdown-item>
                    <el-dropdown-item class="action-item" @click="goConfigure(scope.row)">Configure</el-dropdown-item>
                    <el-dropdown-item class="action-item" @click="">Branch</el-dropdown-item>
                    <el-dropdown-item class="action-item" @click="">Enable as APP Seller</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
        <Pagination :total="total" :page="pageNum" :limit="pageSize" @pagination="changePageFetching" />
      </el-card>
    </div>
  </div>
  <!--改变用户状态 -->
  <el-dialog v-model="showRightBox" width="40%">
    <div>
      <div class="dia-title">
        <el-icon style="color: #e6a23c; margin-right: 10px" size="20"><i-warning-filled /></el-icon>
        Are you sure to {{ currentInfo.status === '1' ? 'Block' : 'Enable' }} this user
      </div>
      <div class="user-info">
        <div class="user-ava">
          <img class="user-ava" src="@/assets/logo.png" alt="" />
        </div>
        <div class="user-detail">
          <div>User name：{{ currentInfo.name }}</div>
          <div>User mobile：{{ currentInfo.phone }}</div>
        </div>
      </div>
      <div class="change-btn">
        <el-button type="primary" @click="setStatus">
          {{ currentInfo.status === '1' ? 'Block it' : 'Enable it' }}
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

import Pagination from '@/views/components/pagination'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'

export default defineComponent({
  components: { Pagination },
  setup(props, context) {
    const state = reactive({
      tableList: [
        {
          id: '123',
          name: 'ssssssssssssssffffffff',
          status: '1',
          phone: '1384444744444'
        }
      ],
      industryList: [
        { label: 'test', value: '01' },
        { label: 'test', value: '02' }
      ],
      industry: '',
      qualiList: [
        { label: '77', value: '01' },
        { label: '88', value: '02' }
      ],
      quali: '',
      transactionId: '',
      dateTime: '',
      pageNum: 1,
      pageSize: 10,
      total: 0,
      referrerName: '',
      showRightBox: false,
      currentInfo: {} //当前选择的人的信息
    })
    let $router = useRouter()
    const search = () => {}

    const getList = () => {}
    const changePageFetching = () => {}
    const goDetail = (row) => {
      $router.push('/merchant/merchant-detail/123')
    }
    const setActive = (item) => {
      ElMessageBox.confirm(
        `Are you sure to ${item.status === '1' ? 'enable' : 'active'} Merchant as a Seller`,
        'Warning',
        {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      )
        .then(() => {
          ElMessage({
            type: 'success',
            message: 'Delete completed'
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: 'Delete canceled'
          })
        })
    }
    const setStatus = () => {
      state.showRightBox = false
      ElMessage.success('Successfully!')
    }
    const goComission = (row) => {
      $router.push(`/customer/commission/${row.id}`)
    }
    const goConfigure = (row) => {
      $router.push(`/merchant/configure/${row.id}`)
    }
    return {
      ...toRefs(state),
      search,
      changePageFetching,
      goDetail,
      setActive,
      setStatus,
      goComission,
      goConfigure
    }
  }
})
</script>

<style scoped src="./index.scss"></style>
