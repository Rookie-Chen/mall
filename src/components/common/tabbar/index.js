
// 作用：封装组件时多个组件可一次性导出，在使用的时候就只需要导入index.js即可
// 如果不这样操作的话，引用的时候要引入每一个组件
import TabBar from './TabBar.vue'
import TabBarItem from './TabBarItem.vue'
export {
  TabBar,TabBarItem
}