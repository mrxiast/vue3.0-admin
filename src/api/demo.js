import request from '@/utils/baseRequest'

export function loginReq (data) {
  return request({
    url: '/public/api/security/session',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: true
  })
}

export function getCurrInfoReq () {
  return request({
    url: '/api/user/current',
    bfLoading: false,
    method: 'get'
  })
}

export function updateUserReq (id, data) {
  return request({
    url: `/api/user/${id}`,
    data: data,
    method: 'put'
  })
}

export function updateUserStatusReq (id, status) {
  return request({
    url: `/api/user/${id}/${status}`,
    method: 'patch',
    isParams: true
  })
}
//注册账号
export function registerApi (data) {
  return request({
    url: '/public/api/agent/referral/register',
    data: data,
    method: 'post'
  })
}
