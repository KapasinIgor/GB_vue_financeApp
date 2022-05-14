<template>
  <div class="wrapper">
    <div class="header">{{ modalWindowSettings.title }}</div>
    <br>
    <div class="content">
      <component :is="ModalWindow" :values="modalWindowSettings.props"/>
    </div>
    <div class="footer">
      <MyButton @click="$modal.hideModal()">Закрыть</MyButton>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "@/components/AddPaymentForm";
import AuthForm from "@/components/AuthForm";
import MyButton from "@/components/MyButton";

export default {
  name: "ModalWindow",
  components: {MyButton, AddPaymentForm, AuthForm},
  props: {
    ModalWindow: String,
    modalWindowSettings: Object
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 20px;
  position: absolute;
  top: 20%;
  left: 35%;
  background: lightblue;
}
</style>