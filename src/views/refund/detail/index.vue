<template>
  <div class="container">
    <h2 class="page-title">Refund Details</h2>
    <div class="top-box">
      <el-card>
        <div class="table-box">
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Refund ID</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Refund Amount</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Refund Date</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Refund Status</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
        </div>
      </el-card>
    </div>
    <div class="top-box">
      <el-card>
        <div class="table-box">
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Transaction ID</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Transaction Date</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Transaction Amount</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Refund Amount Total</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Refund</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup(props, context) {
    const state = reactive({
      tableList: [],
      transactionId: '',
      dateTime: '',
      pageNum: 1,
      pageSize: 10,
      total: 0
    })
    const search = () => {}
    const exportFile = () => {}
    const getList = () => {}
    const changePageFetching = () => {}
    return {
      ...toRefs(state),
      search,
      exportFile,
      changePageFetching
    }
  }
})
</script>

<style scoped src="./index.scss"></style>
