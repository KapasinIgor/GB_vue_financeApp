<template>
  <div>
    <input type="text">
    <input type="text">
    <MyButton type="button">Войти</MyButton>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton";
export default {
  name: "AuthForm",
  components: {MyButton}
}
</script>

<style scoped>

</style>