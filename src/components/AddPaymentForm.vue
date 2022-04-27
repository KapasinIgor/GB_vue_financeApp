<template>
  <div class="addForm">
    <div>
      <input v-model="date" placeholder="date">
      <select v-model="category" v-if="categoryList">
        <option value="">Выберите категорию</option>
        <option v-for="(option, idx) in categoryList" :key="idx">
          {{ option }}
        </option>
      </select>
      <input v-model.number="value" placeholder="value">
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
      this.$store.commit('addDataToPaymentList',data);
      this.date = '';
      this.category = '';
      this.value = '';
    }
  },
  created() {
    this.$store.dispatch('fetchCategoryList')
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
    },
    categoryList() {
      return this.$store.getters.getCategoryList
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