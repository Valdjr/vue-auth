<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="logar">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          name="email"
          class="form-control"
          v-model="usuario.email"
        />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input
          type="password"
          name="senha"
          class="form-control"
          v-model="usuario.senha"
        />
      </div>
      <button type="submit" class="btn btn-primary mr-3">Logar</button>
      <router-link :to="{ name: 'novo.usuario' }">Cadastre-se</router-link>
      <p class="mt-3 alert alert-danger" v-if="mensagemErro">
        {{ mensagemErro }}
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        email: "",
        senha: "",
      },
      mensagemErro: "",
    };
  },
  methods: {
    logar() {
      this.$store
        .dispatch("efetuarLogin", this.usuario)
        .then(() => {
          this.$router.push({ name: "gerentes" });
          this.mensagemErro = "";
        })
        .catch((err) => {
          if (err.request.status === 401) {
            this.mensagemErro = "Login ou senha inválidos.";
          }
        });
    },
  },
};
</script>

<style>
</style>