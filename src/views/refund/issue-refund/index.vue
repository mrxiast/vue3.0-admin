<template>
  <div class="container">
    <h2 class="page-title">Issue Refund</h2>
    <div class="top-box">
      <el-card>
        <div class="filtter-box">
          <div class="input-box">
            <el-input v-model="transactionId" placeholder="Enter Transaction ID" />
          </div>

          <div class="btn">
            <el-button type="primary" @click="search">Search</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div class="table-box" v-if="orderInfo.id">
      <el-card>
        <el-row class="row-box">
          <el-col :span="8"><div class="col-title">Transaction ID</div></el-col>
          <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
        </el-row>
        <el-row class="row-box">
          <el-col :span="8"><div class="col-title">Transaction Remaining Amount(PHP)</div></el-col>
          <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
        </el-row>
        <el-row class="row-box">
          <el-col :span="8"><div class="col-title">Please enter refund amount</div></el-col>
          <el-col :span="16">
            <div class="col-content">
              <el-input-number v-model="amount" :precision="2" :step="0.1" :min="0" :max="99999999999999999" />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div style="margin-top: 10px; color: #409eff">* Refund amount can not be over the remaining amount</div>
          </el-col>
        </el-row>
        <el-row justify="center">
          <el-button type="primary" @click="confirm">confirm</el-button>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

import { useRouter } from 'vue-router'

export default defineComponent({
  setup(props, context) {
    const state = reactive({
      tableList: [{ name: '0' }],
      transactionId: '',
      amount: 0,
      dateTime: '',
      pageNum: 1,
      pageSize: 10,
      total: 0,
      orderInfo: {}
    })
    let $router = useRouter()
    const search = () => {
      state.orderInfo.id = 1
    }
    const exportFile = () => {}
    const changePageFetching = () => {}
    const goDetail = (row) => {
      $router.push('/transactions/cash-in/agent-cash-in-detail/123')
    }
    const confirm = () => {}
    return {
      ...toRefs(state),
      search,
      exportFile,
      changePageFetching,
      goDetail,
      confirm
    }
  }
})
</script>

<style scoped src="./index.scss"></style>
