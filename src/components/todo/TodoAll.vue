<template>
  <div id="todolist">
    <section class="items-wrap">

      <div class="todo-sub-titie">
        <span class="down-arrow"></span>
        <input type="text" placeholder="What needs to be done ?">
      </div>

      <ul class="list-items">
        <li class="list-item">
          
        </li>
      </ul>






      <ul class="to-where clear-fx">
        <li class="to-all fl"><router-link to="/">All</router-link></li>
        <li class="to-active fl"><router-link to="/active">Active</router-link></li>
        <li class="to-comple fl"><router-link to="/completed">Completed</router-link></li>
        <li class="clear fr"><router-link to="/clear">Clear</router-link></li>
      </ul>
      <router-view/>
    </section>

  </div>
    
</template>

<script>
  export default {
    name: "TodoList",
    data(){
      return {
        list:'hello'
      }
    }
  }
</script>

<style lang="less" scoped>
  #todolist{
    .items-wrap{
      width: 400px;
      margin: 0 auto;
      padding: 16px;
      background: #fdfdfe;
      .todo-sub-titie{
        text-align: left;
        .down-arrow{
          position: relative;
          color: red;
          &::before{
            position: absolute;
            top: 0px;
            width: 30px;
            display: inline-block;
            content: '>';
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
          }
        }
        input{
          margin-left:20px;
          font-size: 20px;
        }
       

      }
    }


  }

</style>
