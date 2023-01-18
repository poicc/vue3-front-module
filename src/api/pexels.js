import request from '@/utils/request'

/**
 * 获取图片数据列表
 */
export const getPexlesList = (data) => {
  return request({
    url: '/pexels/list',
    params: data
  })
}