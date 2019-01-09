<template>
    <div>
      <hello-world v-bind:pdata = "parentsdata"></hello-world>
      <child v-bind:chuanzhi="msg"></child>
    </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld';
  import Child from '../components/Child'
  export default {
    name: "Parent",
    data() {
      return {
        parentsdata:[
          { text: 'Runoob' },
          { text: 'Google' },
          { text: 'Taobao' }
        ],
        msg:'我是父组件的数据'
      }
    },
    components:{
      HelloWorld,
      Child
    }
  }
</script>

<style scoped>

</style>
