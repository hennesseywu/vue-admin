<template>
  <div>
    <h1>vuex 测试</h1>
    Clicked: times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  // import { mapGetters,mapActions } from 'vuex'
  export default {
    computed: {
      // 使用对象展开 混入 computed 对象中
    },
    methods: {
      //...mapActions({
      //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
      //})
    }
  }
</script>