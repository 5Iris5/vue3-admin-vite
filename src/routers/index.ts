import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: async () => await import('@/views/Login/index.vue'),
    meta: { title: '登录/注册' }
  },
  {
    path: '/',
    name: 'home',
    component: async () => await import('@/layouts/index.vue'),
    meta: { title: '首页' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 * token: 判断 token 是否存在?若存在,则验证token是否过期;若不存在,则判断是否进入login页面
 * isTokenExpired: 判断 token 是否过期,通过接口动态获取 -> false过期, true未过期
 * isntRefresh: 判断 是否 刷新页面;true->不是,false->是
 */
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  next()
})

router.afterEach((to: RouteLocationNormalized) => {
  // 设置document title to.meta.title ||
  useTitle('禅游科技OA平台')
})

export default router
