import request from '@/utils/baseRequest'

export function getNotificationListReq (data) {
  return request({
    url: '/api/notification/list',
    data: data,
    isParams: true,
    method: 'get'
  })
}

export function updateNotificationStatueReq (id, status) {
  return request({
    url: `/api/notification/${id}/${status}`,
    method: 'patch',
    isParams: true
  })
}

export function createNotificationReq (data) {
  return request({
    url: '/api/notification',
    data: data,
    method: 'post'
  })
}

export function updateNotificationReq (id, data) {
  return request({
    url: `/api/notification/${id}`,
    data: data,
    method: 'put'
  })
}
