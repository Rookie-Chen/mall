import { request,demo } from './request'

// 首页所有请求的数据，每个页面对应专门的js请求数据，方便管理
export function getHomeData(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(){
  
}
export function dataDemo(){
  return demo({
    url: '/vue/mock.json'
  })
}