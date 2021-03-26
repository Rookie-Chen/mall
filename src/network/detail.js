import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  });
}

// 对复杂的后台数据进行整合

// 商品基本信息
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.oldPrice = itemInfo.oldPrice
    this.price = itemInfo.price
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}
// 店铺信息
export class Shop{
  constructor(shopInfo){
    this.score = shopInfo.score
    this.cFans = shopInfo.cFans
    this.cSells = shopInfo.cSells
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cGoods = shopInfo.cGoods
    this.shopUrl = shopInfo.shopUrl
  }
}
// 商品参数
export class Params{
  constructor(info,rule){
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}