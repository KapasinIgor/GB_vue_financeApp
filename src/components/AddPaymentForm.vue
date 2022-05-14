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
    <MyButton @click="onClickSave">Добавить/изменить</MyButton>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton";

export default {
  name: "AddPaymentForm",
  components: {MyButton},
  data() {
    return {
      editMode: false,
      date: '',
      category: '',
      value: '',
      id: ''
    }
  },
  props: {
    values: Object
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
        id: this.id || Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
      }
      if (this.editMode) {
        this.$store.commit('editDataToPaymentList', data)
        this.editMode = false
      } else {
        this.$store.commit('addDataToPaymentList', data);
      }
      this.date = '';
      this.category = '';
      this.value = '';
    }
  },
  async created() {
    await this.$store.dispatch('fetchCategoryList')
  },
  mounted() {
    if (this.values?.item) {
      const {category, date, value, id} = this.values.item
      this.value = value
      this.date = date
      this.category = category
      this.id = id
      this.editMode = true
      return;
    }
    const {category, section} = this.$route.params
    if (!category || !section) return
    this.category = category
    const {value} = this.$route.query
    if (!value) return
    this.value = value
    if (this.value && this.category) {
      this.onClickSave()
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