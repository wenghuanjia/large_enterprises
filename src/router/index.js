import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/login' // 高企登陆页面
import register from '../page/register' // 注册页面
import manager from '../page/manager' // 管理界面
import managerInfo from '../page/managerinfo' // 企业信息管理页面
import declare from '../page/declare' // 申报管理
import workbench from '../page/workbench' // 工作台
import jurisdiction from '../page/jurisdiction' //  权限
import license from '../page/license' // 营业执照
import company from '../page/company' // 营业执照

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登陆'
      }
    }, {
      path: '/manager',
      component: manager,
      meta: {
        title: '管理界面'
      },
      children: [
        {
          path: '',
          redirect: 'managerinfo',
        }, {
          path: 'managerinfo',
          component: managerInfo,
          meta: {
            title: '企业信息管理'
          }
        }, {
          path: 'declare',
          component: declare,
          meta: {
            title: '申报管理'
          }
        }, {
          path: 'workbench',
          component: workbench,
          meta: {
            title: '工作台'
          }
        }, {
          path: 'jurisdiction',
          component: jurisdiction,
          meta: {
            title: '权限'
          }
        }, {
          path: 'license',
          component: license,
          meta: {
            title: '营业执照'
          }
        }, {
          path: 'company',
          component: company,
          meta: {
            title: '公司荣誉'
          }
        }
      ]
    }, {
      path: '/register',
      component: register,
      meta: {
        title: '注册页面'
      }
    }
  ]
})
