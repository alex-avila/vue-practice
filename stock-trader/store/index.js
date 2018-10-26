import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      funds: 0
    }),
    mutations: {}
  })
}

export default createStore
