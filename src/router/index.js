import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    //accueil de l'application
    component: Home,
    children: [
      {
        path: '/personnel/new',
        name: 'PersonnelNew',
        //accueil de l'application
        component: () => import ('../views/PersonnelEdit.vue') 
      },
    ]
  },
  
  {
    path: '/personnel/:id',
    name: 'Personnel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Personnel.vue'),
    children: [
      {
        path: '/personnel/:id/edit',
        name: 'ModificationEtatCivil',
        component: () => import(/* webpackChunkName: "about" */ '../views/PersonnelEdit.vue')
      },
      {
        path: '/personnel/:id/phone/:idPhone/edit',
        name: 'ressourcePhone',
        component: () => import(/* webpackChunkName: "about" */ '../views/EditPhone.vue')
      },
      {
        path: '/personnel/:id/mail/:idMail/edit',
        name: 'ressourceMail',
        component: () => import(/* webpackChunkName: "about" */ '../views/EditMail.vue')
      },
      {
        path: '/personnel/:id/adress/:idAdress/edit',
        name: 'ressourceAddress',
        //'Édition d\'une ressource. si id ressource =0, création d\'une nouvelle ressource',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/EditAddress.vue')
      },
      {
        path: '/personnel/:id/contrat/:idContrat',
        name: 'infoContrat',
        component: () => import('../views/ContratConsultation.vue')
        
      },
      {
        path: '/personnel/:id/contrat/:idContrat/edit',
        name: 'EditContrat',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ContratEdit.vue')
      },
      {
        path: 'contrat/:idContrat/stop',
        name: 'StopContrat',
        component: () => import('../views/ContractStop.vue')
      },
      {
        path: 'contrat/:idContrat/avenant',
        name: 'Avenant',
        component: () => import('../views/ContractStop.vue')
      },
      {
        path: 'contrat/0/avenant/:idContrat',
        name: 'NewAvenant',
        component: () => import('../views/ContratEdit.vue')
      },
      {
        path: 'secteur',
        name: 'SecteurAttribute',
        component: () => import('../views/PersonnelAttribute.vue')
      },
      {
        path: 'fonction',
        name: 'FonctionAttribute',
        component: () => import('../views/PersonnelAttribute.vue')
      },
      {
        path: 'account/new',
        name: "AccountNew",
        component: () => import('../views/account/NewAccount.vue')
      },
      {
        path: 'account/:idAccount/pin',
        name: "AccountPin",
        component: () => import('../views/account/EditPin.vue')
      },
      {
        path: 'account/create-team-clock-access',
        name: "CreateTeamClockAccess",
        component: () => import('../views/account/TeamclockAccess.vue')
      }
    ]
  },
  {
    path: '/a-propos',
    name: 'A-propos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/A-propos.vue')
  }
]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  