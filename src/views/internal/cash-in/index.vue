<template>
  <div class="container-box">
    <h2 class="title">Cash in</h2>
    <el-card>
      <div class="card-box">
        <div class="box-item">
          <div class="item-label">Agent ID</div>
          <div class="item-box">
            <el-select v-model="agentId" placeholder="" size="medium" style="width: 500px">
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </div>
        </div>
        <div class="box-item">
          <div class="item-label">Select cash in pool</div>
          <div class="item-box">
            <el-select v-model="pool" placeholder="please select your zone" size="medium" style="width: 500px">
              <el-option label="Wallet balance" value="wallet"></el-option>
              <el-option label="Pre-deposite" value="deposite"></el-option>
            </el-select>
          </div>
        </div>
        <div class="box-item">
          <div class="item-label">Enter request amount</div>
          <div class="item-box">
            <div style="width: 500px; display: flex; align-items: center">
              <el-input-number
                v-model="amount"
                :precision="2"
                :step="0.01"
                :min="0.01"
                :max="999999999999"
                size="medium"
              />
              <div style="margin-left: 10px">PHP</div>
            </div>
          </div>
        </div>
        <div class="box-item">
          <div class="item-label">Service charge</div>
          <div class="item-box">
            <div style="width: 500px; display: flex; align-items: center">
              <el-input-number
                v-model="charge"
                :precision="2"
                :step="0.01"
                :min="0.01"
                :max="999999999999"
                size="medium"
              />
              <div style="margin-left: 10px">PHP</div>
            </div>
          </div>
        </div>
        <div class="box-item" style="justify-content: flex-end">
          <div>
            Amount to cash in
            <span style="padding: 0 10px; background-color: #eee">{{ amount - charge }}</span>
            PHP
          </div>
        </div>
        <div class="box-item">
          <div class="item-label">Upload bank slip</div>
          <div class="item-box">
            <div style="width: 500px; display: flex; align-items: center">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                style="border: 1px solid #eee"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else size="80" color="#eee"><i-plus /></el-icon>
              </el-upload>
            </div>
          </div>
        </div>
        <div class="box-item" style="justify-content: center">
          <el-button type="primary" @click="confirm">Confirm</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    let amount = ref(0.01)
    let charge = ref(0.01)
    let agentId = ref('')
    let pool = ref('')
    let imageUrl = ref('')
    const handleAvatarSuccess = (res, file) => {
      this.imageUrl = URL.createObjectURL(file.raw)
    }
    const beforeAvatarUpload = (file) => {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    }
    const confirm = () => {}
    return {
      agentId,
      pool,
      amount,
      charge,
      imageUrl,
      handleAvatarSuccess,
      beforeAvatarUpload,
      confirm
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
