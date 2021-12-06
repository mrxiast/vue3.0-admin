import { onMounted, toRefs, reactive } from 'vue'
export default function () {
  const passwordValid = (rule, value, callback) => {
    if (!/^(?![^a-zA-Z]+$)(?!\D+$)/.test(value)) {
      callback(new Error('Password should be 8-50 len of string and digit'))
    } else {
      callback()
    }
  }
  const emailValid = (rule, value, callback) => {
    let RegEmail = /^([a-zA-Z]|[0-9])(\w|\\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    if (!RegEmail.test(value)) {
      return callback(new Error('Invalid email'))
    } else {
      callback()
    }
  }
  const upZeroInt = (rule, value, callback) => {
    if (!/^\+?[1-9]\d*$/.test(value)) {
      callback(new Error('Should greater than zero'))
    } else {
      callback()
    }
  }
  const upZeroIntCanNull = (rule, value, callback) => {
    if (!value) {
      callback()
    } else {
      if (!/^\+?[1-9]\d*$/.test(value)) {
        callback(new Error('Should greater than zero'))
      } else {
        callback()
      }
    }
  }
  const validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Should not be empty'))
    } else {
      callback()
    }
  }
  const phone = (rule, value, callback) => {
    let RegPhone = /^[1-9][0-9]{9}$/
    if (!RegPhone.test(value)) {
      return callback(new Error('Invalid Mobile Number'))
    } else {
      callback()
    }
  }
  const otp = (rule, value, callback) => {
    if (!/^[0-9]{6}$/.test(value)) {
      callback(new Error('Invalid OTP'))
    } else {
      callback()
    }
  }
  const state = reactive({

    /* 表单校验*/
    formRulesHook: {
      isNotNull: [{ required: true, message: 'Field required', trigger: 'blur' }],
      isNotNullSecond: [{ required: true, message: 'Field required', trigger: 'blur' }],
      mLength8: [
        { required: true, message: 'Field required', trigger: 'blur' },
        { max: 8, message: 'Length of characters should less than 8', trigger: 'blur' }
      ],
      minLength7: [
        { required: true, message: 'Field required', trigger: 'blur' },
        { min: 7, message: 'Length of characters should larger than 7', trigger: 'blur' }
      ],
      length6: [
        { required: true, message: 'Field required', trigger: 'blur' },
        { min: 6, max: 6, message: 'Length of characters should be 6', trigger: 'blur' }
      ],
      desc: [{ validator: validatePass, trigger: 'blur' }],
      upZeroInt: [{ validator: upZeroInt, trigger: 'blur' }],
      upZeroIntCanNull: [{ validator: upZeroIntCanNull, trigger: 'blur' }],
      passwordValid: [{ validator: passwordValid, trigger: 'blur' }],
      phone: [
        { required: true, message: 'Mobile Number required', trigger: 'blur' },
        { validator: phone, trigger: 'blur' }
      ],
      otp: [
        { required: true, message: 'OTP required', trigger: 'blur' },
        { validator: otp, trigger: 'blur' }
      ],
      emailValid: [
        { required: true, message: 'Field required', trigger: 'blur' },
        { validator: emailValid, trigger: 'blur' }
      ]
    },
    /* 时间packing相关*/
    datePickerOptions: {
      disabledDate: (time) => {
        return time.getTime() < Date.now() - 86400000
      }
    },
  })

  onMounted(() => { })
  return {
    ...toRefs(state),
  }
}
