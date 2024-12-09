<template>
    <div>
      <h2>{{ isEditing ? 'Editar Cliente' : 'Criar Cliente' }}</h2>
      <form v-if="!loading" @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="nomeEmpresa" class="form-label">Nome da Empresa</label>
          <input v-model="form.nomeEmpresa" type="text" class="form-control" id="nomeEmpresa" required>
        </div>
        <div class="mb-3">
          <label for="porte" class="form-label">Porte da Empresa</label>
          <select v-model="form.porte" class="form-select" id="porte" required>
            <option value="Pequena">Pequena</option>
            <option value="Media">Média</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">{{ isEditing ? 'Atualizar' : 'Criar' }}</button>
      </form>
      <div v-else>Carregando...</div>
    </div>
  </template>
  
  <script>
import { mapActions } from 'vuex'

export default {
  name: 'ClienteForm',
  data() {
    return {
      form: {
        nomeEmpresa: '',
        porte: 'Pequena'
      },
      loading: false
    }
  },
  computed: {
    isEditing() {
      return !!this.$route.params.id
    },
    clienteId() {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions(['createCliente', 'updateCliente', 'fetchCliente']),
    async submitForm() {
      try {
        if (this.isEditing) {
          await this.updateCliente({ id: this.clienteId, ...this.form })
        } else {
          await this.createCliente(this.form)
        }
        this.$router.push({ name: 'ClienteList' })
      } catch (error) {
        console.error('Erro ao submeter formulário:', error)
        alert('Erro ao submeter formulário:', error)
      }
    },
    async loadCliente() {
      if (this.isEditing && this.clienteId) {
        this.loading = true
        try {
          const cliente = await this.fetchCliente(this.clienteId)
          this.form = { ...cliente }
        } catch (error) {
          console.error('Erro ao carregar cliente:', error)
          alert('Erro ao carregar cliente:', error)
        } finally {
          this.loading = false
        }
      }
    }
  },
  watch: {
    '$route': {
      immediate: true,
      handler() {
        this.loadCliente()
      }
    }
  },
  created() {
  }
}
</script>