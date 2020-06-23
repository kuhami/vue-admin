import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin/vue/list',
    method: 'get',
    params
  })
}
