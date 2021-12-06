<!--suppress ALL -->
<template>
  <div class="login-container columnCC" style="position: relative">
    <particles></particles>
    <div class="box-box">
      <el-card>
        <el-form ref="refloginForm" size="medium" class="login-form" :model="formInline" :rules="formRulesMixin">
          <div class="mb-3">
            <a routerLink="/">
              <img src="@/assets/FPLogo-02.png" alt height="100" />
            </a>
          </div>
          <div class="form-label">Enter Mobile Number/E-mail:</div>
          <el-form-item prop="username" required>
            <div class="rowSC">
              <el-input v-model="formInline.username" />
              <div class="show-pwd" />
            </div>
          </el-form-item>
          <div class="form-label">Enter Passwords:</div>
          <el-form-item prop="password" required>
            <div class="rowSC">
              <el-input
                :key="passwordType"
                ref="refPassword"
                v-model="formInline.password"
                :type="passwordType"
                name="password"
                @keyup.enter="handleLogin"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </div>
          </el-form-item>
          <div class="tip-message">{{ tipMessage }}</div>

          <router-link to="/forgot-password">
            <el-link type="primary" style="margin-left: 125px; margin-bottom: 10px">Forgot your password?</el-link>
          </router-link>

          <el-button :loading="loading" type="primary" class="login-btn" size="medium" @click.prevent="handleLogin">
            Confirm
          </el-button>
          <div>
            <el-link type="primary" href="mailto:contact@fortunepay.com">Contact Us</el-link>
            to register an account
          </div>

          <el-card class="bottom-box">
            <div>
              <div class="bottom-box-item">
                <div class="title-icon">
                  <el-icon><i-phone /></el-icon>
                </div>
                <div class="title-title">Mobile Number:</div>
                <div class="title-con">0987658929</div>
              </div>
              <div class="bottom-box-item">
                <div class="title-icon">
                  <el-icon><i-message /></el-icon>
                </div>
                <div class="title-title">E-mail:</div>
                <div class="title-con">xxx@fortunepay.com</div>
              </div>
              <div class="bottom-box-item">
                <div class="title-icon">
                  <el-icon><i-chat-dot-round /></el-icon>
                </div>
                <div class="title-title">Working time:</div>
                <div class="title-con">From 09:00-18:00</div>
              </div>
            </div>
          </el-card>
        </el-form>
      </el-card>
    </div>
    <img src="@/assets/bg.png" class="bg-pic" alt="" />
  </div>
</template>
<script>
import Particles from '@/views/components/particles/index.vue'
import { reactive, toRefs, watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { sleepUtil } from '@/utils/utils'
// import encrypt from '@/utils/encrypt'
export default {
  name: 'Login',
  components: {
    particles: Particles
  },
  setup() {
    let state = reactive({
      formInline: {
        username: '',
        password: ''
      },
      otherQuery: {},
      redirect: '',
      loading: false,
      tipMessage: '',
      passwordType: 'password'
    })
    const route = useRoute()
    const $router = useRouter()
    const store = useStore()
    const refPassword = ref(null)
    const refloginForm = ref(null)
    const { sleepMixin } = commonHook()
    watch(
      route,
      (route) => {
        const query = route.query
        if (query) {
          state.redirect = query.redirect
          state.otherQuery = 'getOtherQuery(query)'
        }
      },
      { immediate: true }
    )
    let getOtherQuery = (query) => {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    let handleLogin = () => {
      refloginForm.value.validate((valid) => {
        if (valid) {
          loginReq()
        } else {
          return false
        }
      })
    }
    let showPwd = async () => {
      if (state.passwordType === 'password') {
        state.passwordType = ''
      } else {
        state.passwordType = 'password'
      }
    }
    let loginReq = () => {
      state.loading = true
      store
        .dispatch('user/login', state.formInline)
        .then(() => {
          state.loading = false
          ElMessage({ message: 'Login successful', type: 'success' })
          $router.push({ path: state.redirect || '/', query: state.otherQuery })
        })
        .catch((res) => {
          state.tipMessage = res.msg
          sleepUtil(300).then(() => {
            state.loading = false
          })
        })
    }
    return {
      ...toRefs(state),
      getOtherQuery,
      handleLogin,
      showPwd,
      loginReq,
      refloginForm
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
<style lang="scss">
.form-box {
  .el-input--medium .el-input__inner {
    height: 80px;
  }
}
</style>
