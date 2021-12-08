<template>
  <div class="container">
    <h2 class="page-title">Agent Cash In Detail</h2>
    <div class="top-box">
      <el-card>
        <div class="title-box">
          <div>Payment information</div>
          <div>
            <el-button type="warning">Void</el-button>
            <el-button type="primary">Print</el-button>
          </div>
        </div>
        <div class="table-box">
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Transaction ID</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Product</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Payment Catagory</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Payment Option</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Channel</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Currency</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Status</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Generate Date</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Complete Date</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
        </div>
      </el-card>
    </div>
    <div class="top-box">
      <el-card>
        <div class="title-box">
          <div>Fund Flow</div>
        </div>
        <div class="table-box">
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Transaction Amount</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Service Charge</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Total Amount</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Refund</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Remaining Amount</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
        </div>
      </el-card>
    </div>
    <div class="top-box">
      <el-card>
        <div class="title-box">
          <div>Customer information</div>
        </div>
        <div class="table-box">
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Merchant Name</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Merchant idustry</div></el-col>
            <el-col :span="16"><div class="col-content">873i3jjejejejwjewjjjj</div></el-col>
          </el-row>
          <el-row class="row-box">
            <el-col :span="8"><div class="col-title">Account Balance</div></el-col>
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
