import Vuex from 'vuex'
import stocks from '@/static/stocks'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      funds: 10000,
      stocks,
      portfolio: []
    }),
    mutations: {
      addStock(state, stock) {
        state.funds -= stock.price * stock.quantity
        state.portfolio.push(stock)
      }
    },
    actions: {
      addStock({ commit }, stock) {
        commit('addStock', stock)
      }
    },
    getters: {
      funds: ({ funds }) => funds
    }
  })
}

export default createStore
