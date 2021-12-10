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
      icon: 'transaction'
    },
    children: [
      {
        path: 'e-wallet',
        component: () => import('@/views/transactions/e-wallet'), // Parent router-view
        name: 'E-wallet',
        meta: { title: 'E-wallet', icon: 'wallet' },
        children: [
          {
            path: 'scan-to-pay',
            component: () => import('@/views/transactions/e-wallet/scan-to-pay'),
            name: 'ScanToPay',
            meta: { title: 'Scan to Pay' }
          },
          {
            path: 'transfer',
            component: () => import('@/views/transactions/e-wallet/transfer'),
            name: 'Transfer',
            meta: { title: 'Transfer' }
          },
          {
            path: 'ang-pao',
            component: () => import('@/views/transactions/e-wallet/ang-pao'),
            name: 'AngPao',
            meta: { title: 'Ang Pao' }
          }
        ]
      },
      {
        path: 'cash-in',
        component: () => import('@/views/transactions/cash-in'), // Parent router-view
        name: 'CasnIn',
        meta: { title: 'Cash In', icon: 'cash-in' },
        children: [
          {
            path: 'customer-cash-in',
            component: () => import('@/views/transactions/cash-in/customer-cash-in'),
            name: 'CustomerCashIn',
            meta: { title: 'Customer Cash In' }
          },
          {
            hidden: true,
            path: 'customer-cash-in-detail/:id',
            name: 'CustomerCashInDetail',
            component: () => import('@/views/transactions/cash-in/customer-cash-in/cash-in-detail'),
            meta: { title: 'Customer Cash In Detail' }
          },
          {
            path: 'agent-cash-in',
            component: () => import('@/views/transactions/cash-in/agent-cash-in'),
            name: 'AgentCashIn',
            meta: { title: 'Agent Cash In' }
          },
          {
            hidden: true,
            path: 'agent-cash-in-detail/:id',
            name: 'AgentCashInDetail',
            component: () => import('@/views/transactions/cash-in/agent-cash-in/cash-in-detail'),
            meta: { title: 'Agent Cash In Detail' }
          },
          {
            path: 'merchant-cash-in',
            component: () => import('@/views/transactions/cash-in/merchant-cash-in'),
            name: 'MerchantCashIn',
            meta: { title: 'Merchant Cash In' }
          },
          {
            hidden: true,
            path: 'merchant-cash-in-detail/:id',
            name: 'MerchantCashInDetail',
            component: () => import('@/views/transactions/cash-in/merchant-cash-in/cash-in-detail'),
            meta: { title: 'Merchant Cash In Detail' }
          }
        ]
      },
      {
        path: 'cash-out',
        component: () => import('@/views/transactions/cash-out'), // Parent router-view
        name: 'CasnOut',
        meta: { title: 'Cash Out', icon: 'cash-out' },
        children: [
          {
            path: 'customer-cash-out',
            component: () => import('@/views/transactions/cash-out/customer-cash-out'),
            name: 'CustomerCashOut',
            meta: { title: 'Customer Cash Out' }
          },
          {
            hidden: true,
            path: 'customer-cash-out-detail/:id',
            name: 'CustomerCashOutDetail',
            component: () => import('@/views/transactions/cash-out/customer-cash-out/cash-out-detail'),
            meta: { title: 'Customer Cash Out Detail' }
          },

          {
            path: 'agent-cash-out',
            component: () => import('@/views/transactions/cash-out/agent-cash-out'),
            name: 'AgentCashOut',
            meta: { title: 'Agent Cash Out' }
          },
          {
            hidden: true,
            path: 'agent-cash-out-detail/:id',
            name: 'AgentCashOutDetail',
            component: () => import('@/views/transactions/cash-out/agent-cash-out/cash-out-detail'),
            meta: { title: 'Agent Cash Out Detail' }
          },
          {
            path: 'merchant-cash-out',
            component: () => import('@/views/transactions/cash-out/merchant-cash-out'),
            name: 'MerchantCashOut',
            meta: { title: 'Merchant Cash Out' }
          },
          {
            hidden: true,
            path: 'merchant-cash-out-detail/:id',
            name: 'MerchantCashOutDetail',
            component: () => import('@/views/transactions/cash-out/merchant-cash-out/cash-out-detail'),
            meta: { title: 'Merchant Cash Out Detail' }
          }
        ]
      },
      {
        path: '/bill-payments',
        component: () => import('@/views/transactions/bill-payments'),
        meta: { title: 'BillPayments', icon: 'bill-payment' }
      },
      {
        path: '/system',
        name: 'System',
        component: () => import('@/views/transactions/bill-payments'),
        meta: { title: 'System', icon: 'bill-payment' }
      },
      {
        path: '/sales',
        name: 'Sales',
        component: () => import('@/views/transactions/sales'),
        meta: { title: 'Sales', icon: 'sales' }
      },
      {
        hidden: true,
        path: '/sales/sale-detail/:id',
        name: 'SaleDetail',
        component: () => import('@/views/transactions/sales/sale-detail'),
        meta: { title: 'Sale Detail' }
      }
    ]
  },
  {
    path: '/refund',
    component: Layout,
    redirect: '/refund',
    children: [
      {
        path: '/refund',
        name: 'Refund',
        component: () => import('@/views/refund/index'),
        meta: { title: 'Refund', icon: 'refund' }
      },
      {
        hidden: true,
        path: 'refund-detail/:id',
        name: 'RefundDetail',
        component: () => import('@/views/refund/detail'),
        meta: { title: 'Refund Detail' }
      },
      {
        hidden: true,
        path: 'issue-refund',
        name: 'IssueRefundDetail',
        component: () => import('@/views/refund/issue-refund'),
        meta: { title: 'Issue Refund' }
      }
    ]
  },
  {
    path: '/customer',
    component: Layout,
    redirect: '/customer',
    children: [
      {
        path: '/customer',
        name: 'Customer',
        component: () => import('@/views/customer'),
        meta: { title: 'Customer', icon: 'customer' }
      },
      {
        hidden: true,
        path: 'customer-detail/:id',
        name: 'CustomerDetail',
        component: () => import('@/views/customer/detail'),
        meta: { title: 'Customer Detail' }
      },
      {
        hidden: true,
        path: 'commission/:id',
        name: 'Commission',
        component: () => import('@/views/customer/commission'),
        meta: { title: 'Commission' }
      }
    ]
  }, {
    path: '/merchant',
    component: Layout,
    redirect: '/merchant',
    children: [
      {
        path: '/merchant',
        name: 'Merchant',
        component: () => import('@/views/merchant'),
        meta: { title: 'Merchant', icon: 'merchant' }
      },
      {
        hidden: true,
        path: 'merchant-detail/:id',
        name: 'MerchantDetail',
        component: () => import('@/views/merchant/detail'),
        meta: { title: 'Merchant Detail' }
      },
      {
        hidden: true,
        path: 'configure/:id',
        name: 'Configure',
        component: () => import('@/views/merchant/configure'),
        meta: { title: 'Configure' }
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
