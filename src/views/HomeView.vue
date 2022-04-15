<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CalcComponent msg="Калькулятор фронтендера"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CalcComponent from '@/components/CalcComponent.vue'

export default {
  name: 'HomeView',
  components: {
    CalcComponent
  }
}
</script>
