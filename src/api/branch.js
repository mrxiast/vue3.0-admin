import request from '@/utils/baseRequest'

export function branchListReq (data) {
  return request({
    url: '/api/branch/list',
    data: data,
    method: 'get',
    isParams: true
  })
}

export function createBranchReq (data) {
  return request({
    url: '/api/branch',
    data: data,
    method: 'post'
  })
}

export function updateBranchStatusReq (id, status) {
  return request({
    url: `/api/branch/${id}/active/${status}`,
    method: 'patch',
    isParams: true
  })
}
