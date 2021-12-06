<template>
  <div class="container-box">
    <h2 class="title">Commission</h2>
    <div class="tab-item">
      <el-card>
        <div class="search-box">
          <div class="search-item">
            <div class="search-title">Search transaction ID</div>
            <div>
              <el-input v-model="transactionId" placeholder="Please input" size="medium" />
            </div>
          </div>
          <div class="search-item">
            <div class="search-title">Select Agent ID</div>
            <div>
              <el-select v-model="agentId" placeholder="Select" size="medium">
                <el-option
                  v-for="item in agentList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="btn-style">
            <div style="height: 25px"></div>
            <el-button type="primary" @click="search" class="btn">Search</el-button>
          </div>
        </div>
      </el-card>
      <div style="height: 20px"></div>
      <el-card>
        <div class="list">
          <div class="select-box">
            <span @click="changeType('1')" :class="userType === '1' ? 'isSelect' : ''">Agent commission</span>
            <span @click="changeType('2')" :class="userType === '2' ? 'isSelect' : ''">Customer commission</span>
          </div>
          <el-table
            v-if="userType === '1'"
            v-loading="listLoading"
            :data="dataList"
            element-loading-text="Loading"
            border
            highlight-current-row
          >
            <el-table-column prop="username" label="Transaction ID" align="center" />
            <el-table-column prop="firstName" label="Agent ID" align="center" />
            <el-table-column prop="lastName" label="Transaction Type" align="center" />

            <el-table-column prop="mobile" label="Transaction Date" align="center" />
            <el-table-column prop="email" label="Transaction Amount" align="center" />
            <el-table-column prop="email" label="Commission Amount" align="center" />
            <el-table-column prop="email" label="Transaction Status" align="center" />
          </el-table>
          <el-table
            v-if="userType === '2'"
            v-loading="listLoading"
            :data="dataList"
            element-loading-text="Loading"
            border
            highlight-current-row
          >
            <el-table-column prop="username" label="Transaction ID" align="center" />
            <el-table-column prop="firstName" label="Customer Name" align="center" />
            <el-table-column prop="lastName" label="Transaction Type" align="center" />

            <el-table-column prop="mobile" label="Transaction Date" align="center" />
            <el-table-column prop="email" label="Transaction Amount" align="center" />
            <el-table-column prop="email" label="Get Commission" align="center" />
            <el-table-column prop="email" label="Transaction Status" align="center" />
          </el-table>
          <pagination v-show="total > 0" :total="total" :page="pageNum" :limit="pageSize" @pagination="changePage" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'commission',
  setup() {
    let state = reactive({
      userType: '1',
      total: 0,
      pageSize: 10,
      pageNum: 1,
      transactionId: '',
      agentId: '',
      agentList: [
        { label: 'Pending', value: '1' },
        { label: 'Approved', value: '2' },
        { label: 'Reject', value: '3' }
      ],
      dataList: [{ username: '123' }],
      listLoading: false
    })
    const search = () => {}
    const changeType = (type) => {
      state.userType = type
      this.pageNum = 1
    }
    const changePage = () => {}

    return {
      ...toRefs(state),
      search,
      changeType
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
