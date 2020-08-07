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
    title: '什么是vue生命周期?',
    author: 'lyl',
    status: '简单',
    creat_time: '2020-08-07',
    message:'Vue 实例从创建到销毁的过程，就是生命周期。<br/><br/>也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期'
  },
    {
      id:'2',
      title: 'vue生命周期的作用是什么？',
      author: 'lyl',
      status: '简单',
      creat_time: '2020-08-07',
      message:'它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑'
    },
    {
      id:'3',
      title: 'Vue 第一次页面加载会触发哪几个钩子？',
      author: 'lyl',
      status: '简单',
      creat_time: '2020-08-07',
      message:'第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子'
    },
    {
      id:'4',
      title: '简单描述每个周期具体适合哪些场景？',
      author: 'lyl',
      status: '简单',
      creat_time: '2020-08-07',
      message:'生命周期钩子的一些使用方法： beforecreate : 可以在这加个loading事件，在加载实例时触发 <br/><br/>created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用<br/><br/> mounted : 挂载元素，获取到DOM节点 <br/><br/>updated : 如果对数据统一处理，在这里写上相应函数<br/><br/> beforeDestroy : 可以做一个确认停止事件的确认框<br/><br/> nextTick : 更新数据后立即操作dom'
    },
    {
      id:'5',
      title: '请详细说下你对vue生命周期的理解？',
      author: 'lyl',
      status: '简单',
      creat_time: '2020-08-07',
      message:"总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。<br clear='all' style=''/><br/>创建前/后： 在beforeCreated阶段，vue实例的挂载元素$el和**数据对象**data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。<br/><br/>载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。<br/><br/>更新前/后：当data变化时，会触发beforeUpdate和updated方法。<br/><br/>销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在"
    },
  //   {
  //   id:'1',
  //   title: '<keep-alive></keep-alive>的作用是什么?',
  //   author: 'lyl',
  //   status: '中',
  //   creat_time: '2020-06-17',
  //   message:'主要用于保留组件状态或避免重新渲染.'
  // },{
  //   id:'2',
  //   title: 'slot（插槽）是干什么的?',
  //   author: 'lyl',
  //   status: '中',
  //   creat_time: '2020-06-12',
  //   message:'插槽含义：就是引入子组件后，在插入子组件元素中添加信息或者标签，使得子组件的指定位置插入信息或者标签; 插槽有三种：默认插槽、具名插槽、作用域插槽.'
  // }
  ]
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
