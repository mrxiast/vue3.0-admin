import { getToken } from '@/utils/auth'
import $moment from 'moment-mini'
import { ElNotification, ElMessageBox } from 'element-plus'
/* 数组操作相关api*/
/*
 * 根据key名称过滤数组
 * arr:数组
 * key：数值对象总的key
 * */
export const filterArrM = (arr, key) => {
  const hash = {}
  return arr.reduce((ss, item) => {
    hash[item[key]] ? '' : (hash[item[key]] = ss.push(item))
    return ss
  }, [])
}
/*
 * 清空空的参数项
 * objParam：传入的参数
 * */
export const clearParamsIsNull = (objParam) => {
  const obj = Object.keys(objParam)
  obj.forEach((fItem) => {
    if (objParam[fItem] === '' || objParam[fItem] === null || objParam[fItem] === undefined) delete objParam[fItem]
  })
  return objParam
}
//延时执行
export const sleepUtil = (time) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      resolve()
    }, time)
  })
}
//重置一维对象内容
export const resetData = (form) => {
  Object.keys(form).forEach((sItem) => {
    form[sItem] = ''
  })
}
//将对象row中的数据赋值给form对象
export const reshowDataMixin = (row, form) => {
  Object.keys(row).forEach((fItem) => {
    Object.keys(form).forEach((sItem) => {
      if (fItem === sItem) {
        form[sItem] = row[sItem]
      }
    })
  })
}
/*获取token*/
export const accessTokenUtil = () => {
  return getToken()
}
/*获取个人信息*/
export const userBaseInfoUtil = () => {
  return JSON.parse(localStorage.getItem('L_userBaseInfo'))
}
/* 获取时间点*/
export const todayTimeUtil = () => {
  return $moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')
}
export const currentTimeUtil = () => {
  return $moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
}
export const todayTimeUtilLast = () => {
  return $moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
}
export const beforeThreeDateTimeUtil = () => {
  return $moment().add(-3, 'days').format('YYYY-MM-DD HH:mm:ss')
}
export const yesterdayTimeUtil = () => {
  return $moment().add(-1, 'days').format('YYYY-MM-DD HH:mm:ss')
}

/*
 * 提示
 * message: 提示内容
 * type：提示类型
 * title：提示标题
 * duration：提示时长（ms）
 * */
export const elNotifyUtil = (message, type, title, duration) => {
  type = type || 'success'
  ElNotification[type]({
    title: title || '提示',
    message: message || '请传入提示消息',
    position: 'top-right',
    duration: duration || 2500,
    offset: 40
  })
}
/*
  确认弹框
* title:提示的标题
* message:提示的内容
* return Promise
* */
export const elConfirmUtil = (title, message, callback) => {
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm(message || 'Are you sure want to delete?', title || 'Confirm', {
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      type: 'warning'
    })
      .then(() => {
        callback()
        resolve()
      })
      .catch(() => {
        reject()
      })
  })
}
