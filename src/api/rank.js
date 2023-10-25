import request from '@/utils/request'

export function getListRanks(params) {
  return request({
    url: '/top-user',
    method: 'get',
    params
  })
}
