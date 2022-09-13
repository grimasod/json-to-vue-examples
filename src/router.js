import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('/src/views/ViewHome.vue')
  },
  {
    path: '/global-components',
    name: 'global-components',
    component: () => import('/src/views/ViewGlobalComponentsExample.vue')
  },
  {
    path: '/composable',
    name: 'composable',
    component: () => import('/src/views/ViewComposableExample.vue')
  },
  {
    path: '/dynamic-imports',
    name: 'dynamic-imports',
    component: () => import('/src/views/ViewDynamicImportsExample.vue')
  }
  // {
  //   path: '/404',
  //   name: 'NotFound',
  //   component: () => import('/src/views/ViewNotFound.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import('/src/views/ViewNotFound.vue')
  // }
]

export default () => createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      ...savedPosition ? savedPosition : {
        behavior: 'smooth',
        ...to.hash ? { el: to.hash } : { top: 0 }
      }
    }
  }
})
