import { createStore } from 'vuex'
import api from '../api/api'

export default createStore({
  state: {
    clientes: []
  },
  mutations: {
    SET_CLIENTES(state, clientes) {
      state.clientes = clientes
    },
    ADD_CLIENTE(state, cliente) {
      state.clientes.push(cliente)
    },
    UPDATE_CLIENTE(state, updatedCliente) {
      const index = state.clientes.findIndex(c => c.id === updatedCliente.id)
      if (index !== -1) {
        state.clientes.splice(index, 1, updatedCliente)
      }
    },
    REMOVE_CLIENTE(state, id) {
      state.clientes = state.clientes.filter(c => c.id !== id)
    }
  },
  actions: {
    async fetchClientes({ commit }) {
      const response = await api.get('/clientes')
      commit('SET_CLIENTES', response.data)
    },
    async fetchCliente(_, id) {
      const response = await api.get(`/clientes/${id}`)
      return response.data
    },
    async createCliente({ commit }, cliente) {
      const response = await api.post('/clientes', cliente)
      commit('ADD_CLIENTE', response.data)
    },
    async updateCliente({ commit }, cliente) {
      const response = await api.put(`/clientes/${cliente.id}`, cliente)
      commit('UPDATE_CLIENTE', response.data)
    },
    async deleteCliente({ commit }, id) {
      await api.delete(`/clientes/${id}`)
      commit('REMOVE_CLIENTE', id)
    }
  },
  modules: {
  }
})