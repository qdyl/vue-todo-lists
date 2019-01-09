<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input autofocus="autofocus" autocomplete="off" placeholder="What needs to be done?" class="new-todo" ref="addListInput" v-model="listText" @keyup.enter="addList(listText)">
      </header>

      <section class="main">
        <input id="toggle-all" type="checkbox" class="toggle-all"  >
        <label for="toggle-all" @click="allchoose">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo"   v-for="(list,index) in allLists" v-show="!list.delete" :class="{'completed': list.status,'editing':list.is_eiting,}"> <!--completed editing-->
            <div class="view">
              <input type="checkbox" class="toggle" :checked="list.status"  @click="changeStatus(index)">
              <label @dblclick="toEditing(index)" @click.self="notEidting(index)">{{list.text}}</label>
              <button class="destroy" @click="toDelete(index)"></button>
            </div>
            <input type="text" class="edit" v-model="list.text" @keyup.enter="toKeyup(index,list.text)" :autofocus="{autofocus:list.is_eiting}" >
          </li>

         <!-- <li class="todo completed">
            <div class="view">
              <input type="checkbox" class="toggle">
              <label>asasfafs a</label>
              <button class="destroy"></button>
            </div>
            <input type="text" class="edit"></li>
          <li class="todo completed">
            <div class="view">
              <input type="checkbox" class="toggle">
              <label>adsadsads方法对方的</label>
              <button class="destroy"></button>
            </div>
            <input type="text" class="edit">
          </li>
          <li class="todo completed">
            <div class="view">
              <input type="checkbox" class="toggle">
              <label>对对对</label>
              <button class="destroy"></button>
            </div>
            <input type="text" class="edit">
          </li>-->

        </ul>
      </section>

      <footer class="footer">
        <span class="todo-count"><strong>{{len}}</strong> items left</span>
        <ul class="filters">
          <li><a href="##" @click="clickAll" :class="{selected:cur===0}">All</a></li> <!--http://todomvc.com/examples/vue/#/all-->
          <li><a href="##" @click="clickActive" :class="{selected:cur===1}">Active</a></li>
          <li><a href="##" @click="clickCompleted" :class="{selected:cur===2}">Completed</a></li> <!--http://todomvc.com/examples/vue/#/completed-->
        </ul>
        <button class="clear-completed" v-show="completedNum>0" style="" @click="removeReadlyList">Clear completed</button>
      </footer>

    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Written by <a href="http://evanyou.me/">Evan You</a></p>
      <p>Part of <a href="http://todomvc.com/">TodoMVC</a></p>
    </footer>
  </div>

</template>

<script>
  export default {
    name: "Todo",
    data() {
      return {
        a: 1,
        cur: 0,
        len: 0,// 剩下的没有完成的任务数量(要做的清单)
        compleNum: 0, // 已经完成的数量
        newList:{ // 用户: 新添加的list
          status: false, // false 代表未完成
          is_eiting: false,
          text: '',
          delete: false
        },
        listText:'',
        userinput:'',
        allLists: [
          {
            status: false, // false 代表未完成
            is_eiting: false,
            text: 'hello',
            delete: false
          },
          {
            status: true,
            is_eiting: false,
            text: '111',
            delete: false
          },
          {
            status: false,
            is_eiting: false,
            text: '222',
            delete: false
          },
          {
            status: false,
            is_eiting: false,
            text: '333',
            delete: false
          },
          {
            status: false,
            is_eiting: false,
            text: '444',
            delete: false
          },
          {
            status: false,
            is_eiting: false,
            text: '555',
            delete: false
          },
        ], // 全部清单(可变的)
        activeLists: [],  // 要做的清单
        completedLists: [], // 已完成的清单
        originAllLists: [] // 保全所有数据的清单
      }
    },
    mounted:function() {
      this.remainListLen();
     /* this.originAllList() {

      }*/
    },
    methods: {
      // 保存最新的所有清单的数组
      /*originAllList() {

      },*/
      // 用户添加 todolist
      addList(listText) {
        store.set('user', { name:'Marcus' });
        if(!listText){return}
        // this.listText = listText;
        /*this.newList.status = false;
        this.newList.is_eiting = false;*/
        this.newList.text = listText;
       /* this.newList.delete = false;*/
        this.allLists.unshift(this.newList);
        this.newList = {
          status: false,
          is_eiting: false,
          text: '',
          delete: false
        };
        this.remainListLen();
        this.listText = '';
        this.originAllLists = this.allLists.valueOf(); // 保全数据
      },
      // 点击‘完成’
      changeStatus(index) {
        this.allLists[index].status = !this.allLists[index].status;
        this.remainListLen();
        console.log(this.activeLists);
        // 其他的不能编辑
        this.notEidting();
      },
      // 双击可以编辑
      toEditing(index) {
        this.notEidting();
        this.allLists[index].is_eiting = true;
      },
      // 按下enter键，出发焦点事件，输入内容
      toKeyup(index,userinput) {
        // alert(index)
        // this.userinput = userinput;
        // this.allLists[index].text = this.allLists[index].text + this.userinput;
        this.allLists[index].text = userinput;
        this.allLists[index].is_eiting = !this.allLists[index].is_eiting;
        this.userinput = '';
        this.originAllLists = this.allLists.valueOf(); // 保全数据
        return;
      },
      // 删除
      toDelete(index) {
        this.allLists[index].delete = true;
        this.notEidting();
      },
      // 全选 和 全不选
      allchoose() {
        if(this.a===2) {
          this.allLists.forEach(function (item, index, array) {
            array[index].status = false;
          });
          this.a = 1;
          this.len = this.allLists.length;
          return;
        }
        if (this.a === 1) {
          this.allLists.forEach(function (item, index, array) {
            array[index].status = true;
          });
          this.a = 2;
          this.len = 0;
          return;
        }
      },
      // 获取要做的清单的数组
      remainListLen() {
        this.activeLists = this.allLists.filter(function(item,index,array){
          return array[index].status === false;
        });
        this.len = this.activeLists.length;
      },
      // 点击 'Clear completed'清除已经做了的清单
      removeReadlyList() {
        // this.originAllLists = this.allLists.valueOf(); // 保全数据
        this.remainListLen();
        this.allLists = this.activeLists;
      },
      // 点击 'All'获取待做的的清单
      clickAll() {
        this.cur = 0;
        this.allLists = this.originAllLists;
      },
      // 点击 'Active'获取待做的的清单
      clickActive() {
        // 当两者的length相等的时候，进行拷贝，否则(如果allList数组已经减少了，就不进行拷贝)
        if(this.allLists.length===this.originAllLists.length) {
          this.originAllLists = this.allLists.valueOf(); // 保全数据
        }
        this.cur = 1;
        this.removeReadlyList();
      },
      // 点击 'Completed'获取待做的的清单
      clickCompleted() {
        // 当两者的length相等的时候，进行拷贝，否则(如果allList数组已经减少了，就不进行拷贝)
        if(this.allLists.length===this.originAllLists.length) {
          this.originAllLists = this.allLists.valueOf(); // 保全数据
        }
        this.cur = 2;
        this.activeLists = this.allLists.filter(function(item,index,array){
          return array[index].status === true;
        });
        this.allLists = this.activeLists;
      },
      // 让所有都不可编辑的函数
      notEidting(index) {
        this.allLists.forEach(function (item,inde,array) {
          array[inde].is_eiting = false;
          //array[inde].text =
        });
         // array[inde].is_eiting = true;
      }

    },
    computed:{
      completedNum() {
        return this.compleNum = this.allLists.length - this.len
      }
    }
  }
</script>

<style scoped>
.main .todo .view{
  text-align: left;
}

</style>
