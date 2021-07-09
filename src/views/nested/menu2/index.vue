<template>
  <div style="padding:30px;">
    <div>作用域插槽</div>
    <child :lists="nameList">
      <template slot-scope="a">
        <div>你好：<span>{{a.bbbbb.name}}</span></div>
      </template>
    </child>
    <div>v-slot</div>
    <br>
    <slot-name>
      <template v-slot:header>我是新的header</template>
      <template v-slot:main>哈哈哈哈</template>
      <template v-slot:default>我是默认的</template>
      <template v-slot:footer="slotProps">{{ slotProps.title.title }}---{{slotProps.message}}</template>

      <!--<template #header>我是新的header001</template>-->
    </slot-name>
  </div>
</template>

<script>
  import child from './child'
  import slotName from './slotName'

  export default {
    name: 'menu2',
    components: {
      child,
      slotName
    },
    data() {
      return {
        nameList: [
          { id: 1, name: '孙悟空' },
          { id: 2, name: '猪八戒' },
          { id: 3, name: '沙和尚' },
          { id: 4, name: '唐僧' },
          { id: 5, name: '小白龙' }
        ],
      }
    }
  }
</script>
