<template>
  <div class="forgot-password-container columnCC">
    <el-form
      ref="refForm"
      size="medium"
      class="forgot-password-form"
      :model="formInline"
      :rules="formHook.formRulesHook"
    >
      <div class="mb-3">
        <router-link to="/">
          <img src="@/assets/FPLogo-02.png" alt height="100" />
        </router-link>
      </div>
      <span>Please Enter Mobile Number/E-mail:</span>
      <el-form-item prop="contact" :rules="formHook.formRulesHook.isNotNull">
        <div class="rowSC">
          <el-input v-model="formInline.contact" />
          <el-button type="primary" @click="">Send OTP</el-button>
        </div>
      </el-form-item>
      <span>Please Enter OTP:</span>
      <el-form-item prop="ticket" :rules="formHook.formRulesHook.length6">
        <div class="rowSC">
          <el-input v-model="formInline.ticket" />
        </div>
      </el-form-item>
      <span>Please Enter New Password:</span>
      <el-form-item prop="password" :rules="formHook.formRulesHook.passwordValid">
        <div class="rowSC">
          <el-input
            :key="passwordType"
            ref="refPassword"
            v-model="formInline.password"
            :type="passwordType"
            name="password"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </div>
      </el-form-item>
      <span>Password Confirmation:</span>
      <el-form-item prop="confirm" :rules="formHook.formRulesHook.passwordValid">
        <div class="rowSC">
          <el-input
            :key="passwordType"
            ref="refPassword"
            v-model="formInline.confirm"
            :type="passwordType"
            name="confirm"
            @keyup.enter="handleForgotPassword"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </div>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        class="confirm-btn"
        size="medium"
        @click.prevent="handleForgotPassword"
      >
        Confirm
      </el-button>
    </el-form>
    <div class="tip-message">{{ tipMessage }}</div>
  </div>
</template>

<script>
export default {
  name: 'forgot-password'
}
</script>

<script setup>
import { getCurrentInstance, reactive, ref } from 'vue'
import { forgotPassReq } from '@/api/user'
import { ElMessage } from 'element-plus'

let { proxy } = getCurrentInstance()

//form
let formInline = reactive({
  contact: '',
  ticket: '',
  password: '',
  confirm: ''
})

let loading = ref(false)
let tipMessage = ref('')
let passwordType = ref('password')
const refPassword = ref(null)
let showPwd = () => {
  if (passwordType.value === 'password') {
    passwordType.value = ''
  } else {
    passwordType.value = 'password'
  }
  proxy.$nextTick(() => {
    refPassword.value.focus()
  })
}

let handleForgotPassword = () => {
  let refForm = ''
  proxy.$refs['refForm'].validate((valid) => {
    if (valid) {
      forgotPassReq(formInline).then(() => {
        ElMessage({ message: 'Change password successful', type: 'success' })
        proxy.$router.push('/')
      })
    } else {
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.forgot-password-container {
  height: 100vh;
  width: 100%;
  background-color: #2d3a4b;

  .forgot-password-form {
    margin-bottom: 20vh;
    width: 360px;
    background-color: #fbfbfb;
    padding: 40px;
  }
}

.tip-message {
  color: #e4393c;
  height: 20px;
  margin-top: -12px;
  font-size: 12px;
}

.confirm-btn {
  width: 100%;
  margin-bottom: 30px;
}

.show-pwd {
  width: 50px;
  font-size: 16px;
  color: $dark_gray;
  cursor: pointer;
  text-align: center;
}
</style>