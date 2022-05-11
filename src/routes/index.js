import Vue from "vue";
import VueRouter from "vue-router";
// import createListView from '../views/CreateListView'
import bus from '../utils/bus'
import { store } from '../store/index'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch(error => console.log(error))
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch(error => console.log(error))
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch(error => console.log(error))
      }
    },
    {
      path: '/user/:id',
      component: () => import('../views/UserView.vue'),
    },
    {
      path: '/item/:id',
      component: () => import('../views/ItemView.vue'),
    },
  ]
})