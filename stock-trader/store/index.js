import Vuex from 'vuex'
import stocks from '@/static/stocks'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      funds: 10000,
      stocks: [...stocks],
      portfolio: []
    }),
    mutations: {
      BUY_STOCKS: (state, order) => {
        console.log(state.portfolio)
        const record = state.portfolio.find(x => x.id === order.id)
        if (record) {
          record.quantity += order.quantity
        } else {
          state.portfolio.push({
            id: order.id,
            quantity: order.quantity
          })
        }
        state.funds -= order.price * order.quantity
      },
      SELL_STOCKS: (state, order) => {
        const record = state.portfolio.find(x => x.id === order.id)
        if (record.quantity - order.quantity > 0) {
          record.quantity -= order.quantity
        } else {
          state.portfolio.splice(
            state.portfolio.findIndex(x => x === record),
            1
          )
        }
        state.funds += order.price * order.quantity
      }
    },
    actions: {
      buyStocks({ commit }, order) {
        commit('BUY_STOCKS', order)
      },
      sellStocks({ commit }, order) {
        commit('SELL_STOCKS', order)
      }
    },
    getters: {
      funds: ({ funds }) => funds,
      portfolio: ({ portfolio, stocks }) => {
        return portfolio.map(pStock => {
          const record = stocks.find(stock => stock.id === pStock.id)
          return {
            ...pStock,
            name: record.name,
            price: record.price
          }
        })
      }
    }
  })
}

export default createStore
