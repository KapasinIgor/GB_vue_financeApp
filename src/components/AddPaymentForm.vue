<template>
  <div class="addForm">
    <div>
      <input class="addFormInp" v-model="date" placeholder="date">
      <input class="addFormInp" v-model="category" placeholder="category">
      <input class="addFormInp" v-model="value" placeholder="value">
    </div>
    <MyButton @click="onClickSave">Добавить</MyButton>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton";

export default {
  name: "AddPaymentForm",
  components: {MyButton},
  data() {
    return {
      date: '',
      category: '',
      value: ''
    }
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value
      }
      this.$emit('addNewPayment', data)
      this.date = '';
      this.category = '';
      this.value = '';
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date()
      const formatter = new Intl.DateTimeFormat('ru', {
        day: "numeric",
        month: "numeric",
        year: "numeric"
      })
      return formatter.format(today);
    }
  }
}
</script>

<style scoped lang="scss">
.addForm {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>