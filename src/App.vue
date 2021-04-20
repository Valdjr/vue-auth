<template>
  <div id="app">
    <Navegacao/>
    <router-view />
  </div>
</template>

<script>
import Navegacao from '@/components/Navegacao'

export default {
  components: {
    Navegacao
  }
};
</script>
