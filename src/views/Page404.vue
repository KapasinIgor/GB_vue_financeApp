<template>
<div>
  <h1>Ошибка 404</h1>
  <h3>Страница не найдена!</h3>
  <MyButton @click="$modal.show('AuthForm', {title: 'Авторизация'})">Авторизоваться</MyButton>
</div>
</template>

<script>
import MyButton from "@/components/MyButton";
export default {
  name: "NotFound",
  components: {MyButton}
}
</script>

<style scoped>

</style>