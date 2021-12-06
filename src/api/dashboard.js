import request from '@/utils/baseRequest'

export function getCurrentInfoApi () {
  return request({
    url: '/api/internal/dashboard/current/info',
    bfLoading: true,
    method: 'get'
  })
}
