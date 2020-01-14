import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main.vue'
import CategoriesEdit from '../views/CategoriesEdit.vue'
import CategoriesList from '../views/CategoriesList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      { path: "/categories/create", component: CategoriesEdit },
      { path: "/categories/edit/:id", component: CategoriesEdit,props:true },
      { path: "/categories/list", component: CategoriesList }

    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
