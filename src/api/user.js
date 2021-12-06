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

export function getListReq (data) {
  return request({
    url: '/api/user/list',
    data: data,
    isParams: true,
    method: 'get'
  })
}

export function logoutReq () {
  return request({
    url: '/api/security/logout',
    method: 'get'
  })
}

export function forgotPassReq (data) {
  return request({
    url: '/public/api/security/forget/password',
    data: data,
    method: 'post',
    isAlertErrorMsg: true
  })
}

export function createUserReq (data) {
  return request({
    url: '/api/user',
    data: data,
    method: 'post'
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
