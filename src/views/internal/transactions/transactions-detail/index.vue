<template>
  <div class="container-box">
    <h2 class="title">Transaction details</h2>
    <el-card>
      <div class="card-box">
        <div class="box-top">
          <div class="top-item">
            <div class="item-label">Transaction Type</div>
            <div class="item-value">000111</div>
          </div>
          <div class="top-item">
            <div class="item-label">Assessment Form NO</div>
            <div class="item-value">addddddddddddddddddddd</div>
          </div>
          <div class="top-item">
            <div class="item-label">Case title</div>
            <div class="item-value">hhhhhhhhhhhhhhhhhhhhhhh</div>
          </div>
        </div>
        <div class="box-body">
          <div class="item">
            <div class="item-label">Agent ID</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Branch Name</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Transaction ID</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Transaction Date</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Litigant Name</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Region</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Court Station</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Currency</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Judiciary Development Fund</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Special Allowane for the Judiciary Fund</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Legal Research Fund</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Victim's Compensation Fund</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Sheriffs Trust Fund</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Service charge</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Amount total</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Revate</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">MA Commission</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Suv-Agent Commission</div>
            <div class="item-value">5555555555</div>
          </div>
          <div class="item">
            <div class="item-label">Status</div>
            <div class="item-value">5555555555</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'notice',
  setup() {
    let state = reactive({})

    // const approve = (item) => {
    //   ElMessageBox.confirm('Are you sure to approve this request?', 'Warning', {
    //     confirmButtonText: 'Approve',
    //     cancelButtonText: 'Cancel',
    //     type: 'warning'
    //   })
    //     .then(() => {
    //       // ElMessage({
    //       //   type: 'success',
    //       //   message: 'Delete completed'
    //       // })
    //     })
    //     .catch(() => {})
    // }

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
