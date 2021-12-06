<template>
  <div class="base-container">
    <div class="tab-box">
      <div class="tab-item">
        <div class="search-box">
          <div class="search-item">
            <div class="search-title">Select Status</div>
            <div>
              <el-select v-model="status" placeholder="Select" size="medium">
                <el-option
                  v-for="item in statusList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="search-item">
            <div class="search-title">Search Transaction ID</div>
            <div>
              <el-input v-model="mobileNum" placeholder="Please input" size="medium" />
            </div>
          </div>
          <div class="search-item">
            <div class="search-title">Filter date</div>
            <div>
              <el-date-picker
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                size="medium"
                v-model="date"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
              ></el-date-picker>
            </div>
          </div>

          <div class="btn-style">
            <div style="height: 25px"></div>
            <el-button type="primary" @click="search" class="btn">Search</el-button>
          </div>
          <div class="btn-style">
            <div style="height: 25px"></div>
            <el-button type="primary" @click="crateNew" class="btn">Create New Trans</el-button>
          </div>
        </div>
        <div class="list">
          <el-table
            v-loading="listLoading"
            :data="dataList"
            element-loading-text="Loading"
            border
            highlight-current-row
            @row-click="lookInfo"
          >
            <el-table-column prop="username" label="Transaction ID" align="center" />
            <el-table-column prop="firstName" label="Agent Name" align="center" />
            <el-table-column prop="lastName" label="Branch Name" align="center" />
            <el-table-column prop="mobile" label="Transaction Date" align="center" />
            <el-table-column prop="email" label="Litigant Name" align="center" />
            <el-table-column prop="email" label="Assessment Form No" align="center" />
            <el-table-column prop="email" label="Case Title" align="center" />
            <el-table-column prop="email" label="Currency" align="center" />
            <el-table-column prop="email" label="Amount total" align="center" />
            <el-table-column prop="email" label="Commission" align="center" />
            <el-table-column prop="email" label="Wallet Balance" align="center" />
            <el-table-column prop="email" label="Pre-deposit balance" align="center" />
            <el-table-column prop="email" label="Status" align="center" />
          </el-table>
          <pagination v-show="total > 0" :total="total" :page="pageNum" :limit="pageSize" @pagination="changePage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted, getCurrentInstance } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'agent-list',
  setup() {
    onMounted(() => {})
    let store = useStore()
    let state = reactive({
      total: 0,
      pageNum: 1,
      pageSize: 10,
      mobileNum: '',
      listLoading: false,
      dataList: [
        {
          username: '123',
          status: '1'
        }
      ],
      date: '',
      status: '',
      statusList: [
        { label: 'Court Fee', value: '1' },
        { label: 'Cash In', value: '2' },
        { label: 'Cash Out', value: '3' }
      ]
    })
    let { proxy } = getCurrentInstance()

    const crateNew = () => {
      proxy.$router.push('/internal/transactions/agent-service')
    }

    const search = () => {
      state.pageNum = 1
    }
    const getList = () => {
      let params = {
        page: this.pageNum,
        size: this.pageSize
      }
    }
    const changePage = () => {}
    const lookInfo = (row) => {
      console.log(row, 'itemmm')
      proxy.$router.push('/internal/transactions/detail/:id')
    }
    return {
      crateNew,
      changePage,
      lookInfo,
      search,
      getList,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
