<template>
    <div>
      <h2>我是子组件</h2>
     <p> {{chuanzhi}}</p>
    </div>
</template>

<script>
  export default {
    name: "Child",
    props:['chuanzhi'],
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

</style>
