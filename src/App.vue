<template>
  <div id="app" class="container mt-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Teste Branef</router-link>
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Lista de Clientes</router-link>
          <router-link class="nav-link" to="/create">Criar Cliente</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>