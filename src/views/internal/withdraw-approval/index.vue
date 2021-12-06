<template>
  <div class="container-box">
    <h2 class="title">Withdraw approval</h2>
    <div class="tab-item">
      <div class="search-box">
        <div class="search-item">
          <div class="search-title">Search transaction ID</div>
          <div>
            <el-input v-model="transactionId" placeholder="Please input" size="medium" />
          </div>
        </div>
        <div class="search-item">
          <div class="search-title">Select Status</div>
          <div>
            <el-select v-model="selectValue" placeholder="Select" size="medium">
              <el-option
                v-for="item in selectList"
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
      <div class="list">
        <el-table v-loading="listLoading" :data="dataList" element-loading-text="Loading" border highlight-current-row>
          <el-table-column prop="username" label="Transaction ID" align="center" />
          <el-table-column prop="firstName" label="Agent ID" align="center" />
          <el-table-column prop="lastName" label="Date" align="center" />

          <el-table-column prop="mobile" label="Request amount" align="center" />
          <el-table-column prop="email" label="Bank Fee" align="center" />
          <el-table-column prop="email" label="Withdrawn amount" align="center" />
          <el-table-column prop="email" label="Withdrawn to" align="center" />

          <el-table-column
            label="Actions"
            align="center"
            width="150"
            class="small-padding fixed-width"
            v-if="selectValue == '1'"
            :key="Date.now()"
          >
            <template #default="scope">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link es-style">···</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item class="dropdown-box" @click="approve(scope.row)">
                      <el-icon><i-warning /></el-icon>
                      Approve
                    </el-dropdown-item>
                    <el-dropdown-item class="dropdown-box" @click="reject(scope.row)">
                      <el-icon><i-scale-to-original /></el-icon>
                      Reject
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
        <pagination v-show="total > 0" :total="total" :page="pageNum" :limit="pageSize" @pagination="changePage" />
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'withdraw-approval',
  setup() {
    let state = reactive({
      transactionId: '',
      agentValue: '',
      selectList: [
        { label: 'Pending', value: '1' },
        { label: 'Approved', value: '2' },
        { label: 'Reject', value: '3' }
      ],
      selectValue: '1',
      dataList: [{ name: '123' }],
      listLoading: false
    })
    const approve = (item) => {
      ElMessageBox.confirm('Are you sure to approve this request?', 'Warning', {
        confirmButtonText: 'Approve',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          // ElMessage({
          //   type: 'success',
          //   message: 'Delete completed'
          // })
        })
        .catch(() => {})
    }

    const reject = (item) => {
      ElMessageBox.confirm('Are you sure to Reject this request?', 'Warning', {
        confirmButtonText: 'Reject',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          // ElMessage({
          //   type: 'success',
          //   message: 'Delete completed'
          // })
        })
        .catch(() => {})
    }
    return {
      ...toRefs(state),
      approve,
      reject
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
