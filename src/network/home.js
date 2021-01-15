import { request,demo } from './request'

// 首页所有请求的数据，每个页面对应专门的js请求数据，方便管理
export function getHomeData(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

export function getDogs(page,pageSize){
  return demo({
    url: '/queryDogList?apiKey=8uAHwa88bf5373447ed01a3f707b354b1b12061b80ef878',
    params: {
      page,
      pageSize
    }
  })
}

export function dataDemo(){
  return demo({
    url: '/dog.json'
  })
}