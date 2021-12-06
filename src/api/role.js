import request from '@/utils/baseRequest'

export function getRoleListReq (data) {
  return request({
    url: '/api/role/list',
    data: data,
    isParams: true,
    method: 'get'
  })
}

export function updateRoleStatusReq (id, status) {
  return request({
    url: `/api/role/${id}/${status}`,
    method: 'patch',
    isParams: true
  })
}

export function getPermissionListReq (data) {
  return request({
    url: '/api/permission/list',
    data: data,
    isParams: true,
    method: 'get'
  })
}

export function createRoleReq (data) {
  return request({
    url: '/api/role',
    data: data,
    method: 'post'
  })
}
