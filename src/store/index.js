import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
    ask_data: {},
    list: [],
  },
  getters: {
    fetchedAskData(state) {
      return state.ask_data;
    }
  },
  mutations,
  actions,
})