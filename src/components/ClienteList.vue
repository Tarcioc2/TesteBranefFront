<template>
  <div>
    <h2>Lista de Clientes</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nome da Empresa</th>
          <th>Porte</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.nomeEmpresa }}</td>
          <td>{{ cliente.porte }}</td>
          <td>
            <button @click="editCliente(cliente)" class="btn btn-sm btn-primary me-2">Editar</button>
            <button @click="deleteCliente(cliente.id)" class="btn btn-sm btn-danger">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ClienteList',
  computed: {
    ...mapState(['clientes'])
  },
  methods: {
    ...mapActions(['fetchClientes', 'deleteCliente']),
    editCliente(cliente) {
      this.$router.push({ name: 'EditCliente', params: { id: cliente.id.toString() } })
    }
  },
  created() {
    this.fetchClientes()
  }
}
</script>