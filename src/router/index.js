import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Parent from '@/components/Parent'
import Child from '@/components/Child'

import Todo from '@/components/Todo'

// import TodoAll from '@/components/todo/TodoAll'
import TodoActive from '@/components/todo/TodoActive'
import TodoCompleted from '@/components/todo/TodoCompleted'
import TodoClear from '@/components/todo/TodoClear'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/active',
      name: 'TodoActive',
      component: TodoActive
    },
    {
      path: '/completed',
      name: 'TodoCompleted',
      component: TodoCompleted
    },
    {
      path: '/clear',
      name: 'TodoClear',
      component: TodoClear
    },
    {
      path: '/a',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/b',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/c',
      name: 'Child',
      component: Child
    }

  ]
})
