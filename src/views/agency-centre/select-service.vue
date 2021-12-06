<template>
  <div class="rowAC">
      <el-card class="card-box" shadow="hover" @click="goCreation()">
        <template #header>
          <div class="card-box-item">
            <div class="title-title">
              <h2>Court Fee</h2>
            </div>
          </div>
        </template>
        <div class="card-box-item">
          <div class="title-title">Service Charge: {{'50 PHP'}}</div>
        </div>
        <div class="card-box-item">
          <div class="title-title">Total Commission: {{'1000'}}</div>
        </div>
      </el-card>

    <el-card class="card-box" shadow="never">
      <template #header>
        <div class="card-box-item">
          <div class="title-title">
            <h2>Cash In</h2>
          </div>
        </div>
      </template>
      <div class="card-box-item">
        <div class="title-title">Service Charge: {{'50 PHP'}}</div>
      </div>
      <div class="card-box-item">
        <div class="title-title">Total Commission: {{'1000'}}</div>
      </div>
    </el-card>
    <el-card class="card-box" shadow="never">
      <template #header>
        <div class="card-box-item">
          <div class="title-title">
            <h2>Cash Out</h2>
          </div>
        </div>
      </template>
      <div class="card-box-item">
        <div class="title-title">Service Charge: {{'50 PHP'}}</div>
      </div>
      <div class="card-box-item">
        <div class="title-title">Total Commission: {{'1000'}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "select-service"
}
</script>

<script setup>

import {getCurrentInstance} from "vue";

let {proxy} = getCurrentInstance()

const goCreation = () => {
  proxy.$router.push('/agency-centre/create-transaction')
}
</script>

<style lang="scss" scoped>

.card-box {
  margin-top: 25px;
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  min-width: 30%;

  .card-box-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .title-title {
      margin: 5px 5px;
    }
  }
}

</style>