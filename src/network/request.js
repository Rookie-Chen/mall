import axios from 'axios'

// 可扩展导出多个方法，如果default 的话只能导出一个
export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    //baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });
  // 2.拦截
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    // 请求成功前处理：loading加载动画，判断登录状态等
    return config
  }, err => {
    console.log(err)
  })
  // 2.2 相应拦截
  instance.interceptors.response.use(res => {
    //console.log(res)
    return res.data;
  }, err => {
    console.log(err)
  })
  // 3.发送请求
  return instance(config); // 返回的就是 Promise 对象
}

// 导出其他请求接口
// export function demo(config){
//   const instance = axios.create({
//     baseURL: 'https://api.apishop.net/common/dogFamily',
//     timeout: 5000
//   });
//   return instance(config); 
// }
export function demo(config){
  const instance = axios.create({
    baseURL: 'http://127.0.0.1/vue',
    timeout: 5000
  });
  return instance(config); 
}