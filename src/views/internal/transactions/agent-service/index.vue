<template>
  <div class="container-box">
    <h2 class="title">Select agent service</h2>
    <el-card>
      <div class="card-box">
        <div v-for="(item, index) in serviceList" :key="index" style="margin: 10px" @click="goCreate(item)">
          <el-card>
            <div class="item">
              <div class="item-title">{{ item.name }}</div>
              <div class="item-content">
                <div class="content-item">
                  <div class="item-label">Service charge</div>
                  <div class="item-value">{{ item.charge }}</div>
                </div>
                <div class="content-item">
                  <div class="item-label">Total commission</div>
                  <div class="item-value">{{ item.total }}</div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive, toRefs, getCurrentInstance } from 'vue'
export default {
  name: 'notice',
  setup() {
    let state = reactive({
      serviceList: [
        { id: '1', name: 'Court Fee', charge: '50', total: '10%' },
        { id: '1', name: 'Cash In', charge: '50', total: '10%' },
        { id: '1', name: 'Court Fee', charge: '50', total: '10%' },
        { id: '1', name: 'Cash In', charge: '50', total: '10%' },
        { id: '1', name: 'Court Fee', charge: '50', total: '10%' },
        { id: '1', name: 'Cash In', charge: '50', total: '10%' },
        { id: '1', name: 'Cash Out', charge: '50', total: '10%' }
      ]
    })

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
    let { proxy } = getCurrentInstance()
    const goCreate = (item) => {
      proxy.$router.push('/internal/transactions/create')
    }

    return {
      ...toRefs(state),
      goCreate
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
