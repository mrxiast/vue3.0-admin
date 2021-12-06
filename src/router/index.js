import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/security/register'),
    hidden: true
  },
  {
    path: '/forgot-password',
    component: () => import('@/views/security/forgot-password.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/transactions',
    component: Layout,
    redirect: '/transactions/e-wallet',
    name: 'Trancactions',
    meta: {
      title: 'Trancactions',
      icon: 'link'
    },
    children: [
      {
        path: 'e-wallet',
        component: () => import('@/views/transactions/e-wallet'), // Parent router-view
        name: 'E-wallet',
        meta: { title: 'E-wallet' },
        children: [
          {
            path: 'scan-to-pay',
            component: () => import('@/views/transactions/e-wallet/scan-to-pay'),
            name: 'ScanToPay',
            meta: { title: 'scan to pay' }
          },
          {
            path: 'transfer',
            component: () => import('@/views/transactions/e-wallet/transfer'),
            name: 'Transfer',
            meta: { title: 'transfer' }
          },
          {
            path: 'ang-pao',
            component: () => import('@/views/transactions/e-wallet/ang-pao'),
            name: 'AngPao',
            meta: { title: 'Ang Pao' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  {
    path: '/agency-centre',
    component: Layout,
    redirect: '/agency-centre/select-service',
    name: 'AgencyCentre',
    meta: {
      title: 'Agency Centre',
      icon: 'center'
    },
    children: [
      {
        path: 'select-service',
        component: () => import('@/views/agency-centre/select-service'),
        name: 'SelectService',
        meta: { title: 'Select Service', icon: 'create' }
      },
      {
        path: 'create-transaction',
        component: () => import('@/views/agency-centre/create-transaction'),
        name: 'CreateTransaction',
        meta: { title: 'Create Transaction', icon: 'create' },
        hidden: true
      },
      {
        path: 'transactions',
        component: () => import('@/views/transaction/index'),
        name: 'Transactions',
        meta: { title: 'Transactions', icon: 'transaction' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'roleIndex',
        component: () => import('@/views/permission/index'),
        name: 'Permission',
        meta: {
          title: 'Role Index'
          //roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'code-index',
        component: () => import('@/views/permission/CodePermission'),
        name: 'CodePermission',
        meta: {
          title: 'Code Index'
        }
      },
      {
        path: 'code-page',
        component: () => import('@/views/permission/CodePage'),
        name: 'CodePage',
        meta: {
          title: 'Code Page',
          code: 1
        }
      },

      // 404 page must be placed at the end !!!
      // using pathMatch install of "*" in vue-router 4.0
      { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
