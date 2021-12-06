import request from '@/utils/baseRequest'

export function getLocationReq (level, parentId) {
  return request({
    url: '/public/api/location',
    data: {
      level: level,
      parentId: parentId
    },
    isParams: true,
    method: 'get'
  })
}
export function getLocationApi (level, parentId) {
  return request({
    url: '/public/api/location',
    data: {
      level: level,
      parentId: parentId
    },
    isParams: true,
    method: 'get',
    bfLoading: false
  })
}
