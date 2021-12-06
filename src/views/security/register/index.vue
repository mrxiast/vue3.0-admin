<template>
  <div class="base-container register">
    <div class="card-box">
      <el-card>
        <div class="account-box">
          <el-button @click="changeType(0)" :type="agentType === 0 ? 'primary' : ''">Register As Individual</el-button>
          <el-button @click="changeType(1)" :type="agentType === 1 ? 'primary' : ''">Register As Corporation</el-button>
        </div>
        <div class="inner-box" v-show="agentType === 0">
          <div class="logo-box">
            <img style="width: 200px" src="@/assets/FPLogo-02.png" alt="" />
          </div>
          <el-form
            ref="indForms"
            :model="indForm"
            :rules="formHook.formRulesHook"
            label-width="0"
            class="demo-ruleForm"
          >
            <el-form-item>
              <div>
                <div>User Name</div>
                <div>
                  <el-form-item prop="username" required>
                    <el-input v-model="indForm.username" size="medium" placeholder="Please enter User Name"></el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <div>
                <div>Password</div>
                <div>
                  <el-form-item prop="password" :rules="formHook.formRulesHook.passwordValid" required>
                    <el-input
                      type="password"
                      v-model="indForm.password"
                      size="medium"
                      maxlength="50"
                      placeholder="Please enter Password(8-50)"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <div>
                <div>Password confirmation</div>
                <div>
                  <el-form-item prop="confirm" :rules="formHook.formRulesHook.passwordValid" required>
                    <el-input
                      type="password"
                      v-model="indForm.confirm"
                      size="medium"
                      placeholder="Please enter confirm Password(8-50)"
                      maxlength="50"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form-item>

            <div>Enter Mobile Number</div>
            <el-form-item prop="phone" :rules="formHook.formRulesHook.phone" required>
              <el-input v-model="indForm.phone" size="medium" placeholder="Please enter Mobile Number" maxlength="10">
                <template #append>
                  <el-button @click="sendMessage" :disabled="showTime">
                    {{ showTime ? `${timeNum}S` : 'send' }}
                  </el-button>
                </template>
              </el-input>
            </el-form-item>
            <div style="height: 10px"></div>
            <el-form-item prop="otp" class="otp-box" :rules="formHook.formRulesHook.otp" required>
              <el-input v-model="indForm.otp" size="medium" placeholder="Please enter OTP" maxlength="6"></el-input>
            </el-form-item>
            <el-form-item>
              <div>Enter your name</div>
              <div style="display: flex; justify-content: space-between">
                <el-col :span="11">
                  <el-form-item prop="firstName" required>
                    <el-input
                      v-model="indForm.firstName"
                      placeholder="Please enter first name"
                      size="medium"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item prop="lastName" required>
                    <el-input v-model="indForm.lastName" placeholder="Please enter last name" size="medium"></el-input>
                  </el-form-item>
                </el-col>
              </div>
            </el-form-item>
            <el-form-item prop="occupation" required>
              <div>Occupation</div>
              <div>
                <el-input
                  v-model="indForm.occupation"
                  size="medium"
                  placeholder="Please enter your occupation"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="source" required>
              <div>Source of Fund</div>
              <div>
                <el-input
                  v-model="indForm.source"
                  size="medium"
                  placeholder="Please enter your Source of Fund"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item>
              <div>
                <el-checkbox v-model="agree">
                  I accept
                  <span style="color: #409eff">Terms and Conditions</span>
                  on Fortune Pay
                </el-checkbox>
              </div>
            </el-form-item>
            <div class="btn">
              <el-button type="primary" @click="submitForm('indForms')" :disabled="!agree">Confirm</el-button>
            </div>
          </el-form>
        </div>
        <div class="inner-box" v-show="agentType === 1">
          <div class="logo-box">
            <img style="width: 200px" src="@/assets/FPLogo-02.png" alt="" />
          </div>
          <el-form
            ref="corForms"
            :model="corForm"
            :rules="formHook.formRulesHook"
            label-width="0"
            class="demo-ruleForm"
          >
            <el-form-item>
              <div>
                <div>Please Enter Company Legal Name</div>
                <div>
                  <el-form-item prop="name" required>
                    <el-input
                      v-model="corForm.name"
                      size="medium"
                      placeholder="Please enter Company Legal Name"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <div>
                <div>Please Enter Company DBA Name</div>
                <div>
                  <el-form-item prop="dbaName" required>
                    <el-input
                      v-model="corForm.dbaName"
                      size="medium"
                      placeholder="Please enter Company DBA Name"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form-item>

            <el-form-item>
              <div>Please Enter First Contact Name</div>
              <div style="display: flex; justify-content: space-between">
                <el-col :span="11">
                  <el-form-item prop="firstName" required>
                    <el-input
                      v-model="corForm.firstName"
                      placeholder="Please enter first name"
                      size="medium"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item prop="lastName" required>
                    <el-input v-model="corForm.lastName" placeholder="Please enter last name" size="medium"></el-input>
                  </el-form-item>
                </el-col>
              </div>
            </el-form-item>

            <el-form-item>
              <div>Enter Mobile Number</div>
              <el-form-item prop="phone" :rules="formHook.formRulesHook.phone">
                <el-input
                  v-model="corForm.phone"
                  placeholder="Please enter valid Mobile Number"
                  size="medium"
                  maxlength="10"
                >
                  <template #append>
                    <el-button @click="sendMessage" :disabled="showTime">
                      {{ showTime ? `${timeNum}S` : 'send' }}
                    </el-button>
                  </template>
                </el-input>
              </el-form-item>
              <div style="height: 10px"></div>
              <el-form-item prop="otp" class="otp-box" :rules="formHook.formRulesHook.otp">
                <el-input
                  v-model="corForm.otp"
                  size="medium"
                  placeholder="Please enter valid OTP"
                  maxlength="6"
                ></el-input>
              </el-form-item>
            </el-form-item>
            <el-form-item>
              <div>
                <div>Please Enter Company address</div>
                <div>
                  <el-form-item prop="addressArr" required>
                    <el-cascader
                      ref="cascader"
                      :props="props"
                      size="medium"
                      style="width: 100%"
                      v-model="corForm.addressArr"
                      @expand-change="handleChange"
                    />
                  </el-form-item>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <div>
                <div>Please Enter E-mail Address</div>
                <div>
                  <el-form-item prop="email" :rules="formHook.formRulesHook.emailValid">
                    <el-input
                      v-model="corForm.email"
                      size="medium"
                      placeholder="Please enter valid E-mail Address"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <div>
                <div>Set up account</div>
                <div>
                  <el-form-item prop="username" required>
                    <el-input v-model="corForm.username" size="medium" placeholder="Please enter UserName"></el-input>
                  </el-form-item>
                </div>
                <div style="height: 10px"></div>
                <div>
                  <el-form-item prop="password" :rules="formHook.formRulesHook.passwordValid" required>
                    <el-input
                      type="password"
                      v-model="corForm.password"
                      size="medium"
                      placeholder="Please enter Password(8-50)"
                      maxlength="50"
                    ></el-input>
                  </el-form-item>
                </div>
                <div style="height: 10px"></div>
                <div>
                  <el-form-item prop="confirm" :rules="formHook.formRulesHook.passwordValid" required>
                    <el-input
                      type="password"
                      v-model="corForm.confirm"
                      size="medium"
                      placeholder="Please enter Password(8-50)"
                      maxlength="50"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form-item>

            <el-form-item>
              <div>Enter Postal code</div>
              <el-form-item prop="postal" required>
                <el-input v-model="corForm.postal" size="medium" placeholder="Please enter your postal"></el-input>
              </el-form-item>
            </el-form-item>
            <el-form-item>
              <div>Enter address</div>
              <el-form-item prop="address" required>
                <el-input v-model="corForm.address" size="medium" placeholder="Please enter your address"></el-input>
              </el-form-item>
            </el-form-item>
            <el-form-item>
              <div>
                <el-checkbox v-model="agree">
                  I accept
                  <span style="color: #409eff">Terms and Conditions</span>
                  on Fortune Pay
                </el-checkbox>
              </div>
            </el-form-item>
            <div class="btn">
              <el-button type="primary" @click="submitForm('corForms')" :disabled="!agree">Confirm</el-button>
            </div>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getLocationApi } from '@/api/location'
import { registerApi } from '@/api/user'
import hooks from '@/hooks/formHook'
export default {
  name: 'Register',
  setup() {
    let formHook = hooks()
    console.log(formHook, '88')
    let state = reactive({
      timer: null,
      timeNum: 60,
      showTime: false,
      name: '123',
      agree: false,
      agentType: 0,
      referralId: '',
      indForm: {
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        confirm: '',
        phone: '',
        otp: '',
        occupation: '',
        source: '',
        name: ''
      },
      corForm: {
        username: '',
        name: '',
        phone: '',
        firstName: '',
        lastName: '',
        otp: '',
        password: '',
        confirm: '',
        email: '',
        postal: '',
        address: '',
        dbaName: '',
        addressArr: []
      },

      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          getLocation(node, resolve)
        },
        value: 'id',
        label: 'name'
      }
    })
    const $route = useRoute()
    const $router = useRouter()
    state.referralId = $route.query.refid
    const indForms = ref(null)
    const corForms = ref(null)
    //获取省市区列表
    const getLocation = (node, reslove) => {
      const level = node.level
      getLocationApi(level, level ? node.value : null).then((response) => {
        const locationList = response.data
        locationList.forEach((item) => {
          //这句代码表示当点击最后一级的时候 label后面不会转圈圈 并把相关值赋值到选择器上
          item.leaf = level >= 3
        })
        reslove(locationList)
      })
    }
    //获取otp
    const sendMessage = () => {
      if (state.indForm.mobile == null || state.indForm.mobile.length !== 11) {
        ElMessage({
          type: 'warning',
          message: 'Please enter mobile number'
        })
        return
      }
      state.showTime = true

      state.timer = setInterval(() => {
        if (state.timeNum > 0) {
          state.timeNum--
        } else {
          state.timeNum = 60
          state.showTime = false
          clearInterval(state.timer)
        }
      }, 1000)
    }
    //提交注册
    const submitForm = () => {
      let params = {}

      if (state.agentType === 0) {
        indForms.value.validate((valid) => {
          if (valid) {
            params = state.indForm
            params.referralId = state.referralId
            params.agentType = 0
            params.nationalityAlias = '+63'
            params.name = params.username
            if (params.confirm !== params.password) return ElMessage.warning('The two passwords are inconsistent')
            register(params)
          } else {
            return false
          }
        })
      } else {
        corForms.value.validate((valid) => {
          if (valid) {
            params = state.corForm
            params.referralId = state.referralId
            params.agentType = 1
            params.agentType = state.agentType
            params.nationalityAlias = '+63'
            console.log(params)
            console.log(state.addressArr)
            if (params.confirm !== params.password) return ElMessage.warning('The two passwords are inconsistent')
            params.locationDto = {
              region: params.addressArr[0],
              province: params.addressArr[1],
              brangay: params.addressArr[2],
              city: params.addressArr[3],
              postal: params.postal,
              address: params.address
            }
            register(params)
          } else {
            return false
          }
        })
      }
    }
    //选择注册账号类型
    const changeType = (type) => {
      state.agentType = type
      indForms.value.resetFields()
      corForms.value.resetFields()
    }
    //注册接口
    const register = (params) => {
      registerApi(params).then((res) => {
        if (res.code == 0) {
          ElMessage({
            type: 'success',
            message: 'Register Successfully!'
          })
          $router.replace('/login')
        }
      })
    }

    return {
      ...toRefs(state),
      indForms,
      corForms,
      submitForm,
      sendMessage,
      changeType,
      formHook
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
<style lang="scss">
.register {
  .el-form-item--mini.el-form-item {
    margin-bottom: 10px;
  }
}
</style>
