import request from '@/utils/request'

export function getListSeasons(params) {
  return request({
    url: '/season',
    method: 'get',
    params
  })
}
