<template>
  <div class="container-box">
    <h2 class="title">Create transactions</h2>
    <el-card>
      <div class="form-item">
        <div class="item-title">Agent ID</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" />
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Select Region</div>
        <div class="item-box">
          <el-select v-model="region" size="medium" style="width: 100%">
            <el-option label="Wallet balance" value="wallet"></el-option>
            <el-option label="Pre-deposite" value="deposite"></el-option>
          </el-select>
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Select Court Station</div>
        <div class="item-box">
          <el-select v-model="region" size="medium" style="width: 100%">
            <el-option label="Wallet balance" value="wallet"></el-option>
            <el-option label="Pre-deposite" value="deposite"></el-option>
          </el-select>
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Litigant Name</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" />
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Judiciary Development Fund</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" />
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Special Allowance for the Judiciary Fund</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" />
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Legal Research Fund</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" />
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Victim's Compensation Fund</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" />
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Sheriff's Trust Fund</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" />
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Assessment Form No</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" />
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Case Title</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" />
        </div>
      </div>
      <div class="form-item">
        <div class="item-title">Service charge:</div>
        <div class="item-box">
          <el-input v-model="agentId" size="medium" disabled />
        </div>
      </div>
      <div class="btn">
        <el-button type="primary" @click="confirm" class="btn" size="medium">Confirm</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  setup() {
    let state = reactive({
      agentId: ''
    })
    const confirm = () => {}
    return {
      ...toRefs(state),
      confirm
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
