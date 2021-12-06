import store from '@/store'
import axios from 'axios'
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus'
import { getToken, setToken } from '@/utils/auth'
let requestData
let loadingE

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  // timeout: 30000
})

service.interceptors.request.use(
  (request) => {
    // console.log('request', request)
    // token配置
    request.headers['Authorization'] = getToken()
    /* 下载文件*/
    if (request.isDownLoadFile) {
      request.responseType = 'blob'
    }
    if (request.isUploadFile) {
      request.headers['Content-Type'] = 'multipart/form-data'
    }
    requestData = request
    if (request.bfLoading) {
      loadingE = ElLoading.service({
        lock: true,
        text: 'Loading data',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.1)'
      })
    }
    /*
     *params会拼接到url上
     * */
    if (request.isParams) {
      request.params = request.data
      request.data = {}
    }
    return request
  },
  (err) => {
    Promise.reject(err)
  }
)

service.interceptors.response.use(
  (res) => {
    if (requestData.afHLoading && loadingE) {
      loadingE.close()
    }

    if (requestData.isDownLoadFile) {
      return res.data
    }
    const { code, data, message, isNeedUpdateToken, updateToken } = res.data
    if (isNeedUpdateToken) {
      setToken(updateToken)
    }
    if (code === 0) {
      return res.data
    } else {
      if (requestData.isAlertErrorMsg) {
        ElMessage({
          message: message,
          type: 'error',
          duration: 2 * 1000
        })
        return Promise.reject(message)
      } else {
        return res.data
      }
    }
  },
  (err) => {
    if (loadingE) loadingE.close()
    if (err && err.response && err.response.data) {
      if (err.response.status === 401) {
        ElMessageBox.confirm('Please login again', {
          confirmButtonText: 're-login',
          // cancelButtonText: 'cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      } else {
        ElMessage({
          message: err.response.data.message,
          type: 'error',
          duration: 2 * 1000
        })
      }
    } else {
      ElMessage({
        message: err,
        type: 'error',
        duration: 2 * 1000
      })
    }
    return Promise.reject(err)
  }
)

export default function baseRequest ({
  url,
  data,
  method,
  isParams,
  bfLoading,
  afHLoading,
  isUploadFile,
  isDownLoadFile,
  baseURL,
  timeout,
  isAlertErrorMsg
}) {
  return service({
    url: url,
    method: method ?? 'post',
    data: data ?? {},
    isParams: isParams ?? false,
    bfLoading: bfLoading ?? true,
    afHLoading: afHLoading ?? true,
    isUploadFile: isUploadFile ?? false,
    isDownLoadFile: isDownLoadFile ?? false,
    isAlertErrorMsg: isAlertErrorMsg ?? true,
    baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
    timeout: timeout ?? 15000
  })
}
