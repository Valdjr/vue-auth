<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <NavegacaoLogged v-if="usuarioEstaLogado" />
      <NavegacaoLogout v-else />
    </div>
  </nav>
</template>

<script>
import NavegacaoLogged from "./NavegacaoLogged";
import NavegacaoLogout from "./NavegacaoLogout";
import {mapGetters} from 'vuex'

export default {
  components: {
    NavegacaoLogged,
    NavegacaoLogout,
  },
  computed: {
    ...mapGetters(['usuarioEstaLogado'])
  },
};
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>
