import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getTableList(params) {
  const { shopId } = params
  return request({
    url: `/posapi/shop/${shopId}-103/shopdeviceapi/device/list`,
    method: 'post',
    data: {},
  })
}
