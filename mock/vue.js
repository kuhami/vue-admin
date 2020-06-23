import Mock from 'mockjs'

// const data = Mock.mock({
//   'items|2': [{
//     id: '@id',
//     title: '@sentence(10, 20)',
//     'status|1': ['published', 'draft', 'deleted'],
//     author: 'name',
//     display_time: '@datetime',
//     pageviews: '@integer(300, 5000)'
//   }]
// })

const data = {
  items:[{
    id:'1',
    title: '<keep-alive></keep-alive>的作用是什么?',
    author: 'lyl',
    status: '中',
    creat_time: '2020-06-17',
    message:'主要用于保留组件状态或避免重新渲染.'
  },{
    id:'2',
    title: 'slot（插槽）是干什么的?',
    author: 'lyl',
    status: '中',
    creat_time: '2020-06-12',
    message:'插槽含义：就是引入子组件后，在插入子组件元素中添加信息或者标签，使得子组件的指定位置插入信息或者标签; 插槽有三种：默认插槽、具名插槽、作用域插槽.'
  }]
}

export default [
  {
    url: '/vue-admin/vue/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
