import { createRouter, createWebHistory } from 'vue-router'
import ClienteList from '../components/ClienteList.vue'
import ClienteForm from '../components/ClienteForm.vue'

const routes = [
  {
    path: '/',
    name: 'ClienteList',
    component: ClienteList
  },
  {
    path: '/create',
    name: 'CreateCliente',
    component: ClienteForm
  },
  {
    path: '/edit/:id',
    name: 'EditCliente',
    component: ClienteForm,
    props: route => {{id: route.params.id}}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router