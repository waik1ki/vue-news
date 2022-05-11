import { fetchList, fetchUserInfo, fetchAskData } from '../api/index'

export default {
  async FETCH_USER({ commit }, username) {
    try {
      const response = await fetchUserInfo(username)
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK_DATA({ commit }, id) {
    try {
      const response = await fetchAskData(id);
      commit('SET_ASK_DATA', response.data);
      return response;
    } catch (error) {
      console.log(error)
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
}