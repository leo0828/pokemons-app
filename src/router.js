/*global Vue*/
import Router from 'vue-router'
import Layout from '@/components/layout'
import Index from '@/pages/index'
import Pokemons from '@/pages/pokemons'
import Pokemon from '@/pages/pokemon'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      meta:{
        title:'首页',
      }
    },
    {
      path: '/sub',
      component: Layout,
      children: [{
        path: 'pokemons',
        name: 'pokemons',
        component: Pokemons,
        meta:{
          title:'Pokemons'
        }
      },{
        path: 'pokemon',
        name: 'pokemon',
        component: Pokemon,
        meta:{
          title:'Pokemon'
        }
      }]
    }
  ]
})
