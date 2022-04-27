<template>
  <div class="home container">
    <header>
      <div class="title">Мои личные расходы</div>
      <div class="total">Всего: {{ getFullPaymentValue }}</div>
    </header>
    <main>
      <MyButton @click="showAddForm = !showAddForm">Добавить новую запись +</MyButton>
      <AddPaymentForm v-show="showAddForm"/>
      <PaymentsDisplay :items="currentElements" @onClickNumber="paginationPayment"/>
      <MyPagination :listCurrent="listCurrent" :listLength="this.getPaymentsList.length" :n="n" @changePage="changePage"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from "@/components/AddPaymentForm";
import MyButton from "@/components/MyButton";
import MyPagination from "@/components/MyPagination";
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: 'HomeView',
  components: {
    MyButton,
    PaymentsDisplay,
    AddPaymentForm,
    MyPagination
  },
  data() {
    return {
      showAddForm: false,
      listCurrent: 1,
      n: 5
    }
  },
  methods: {
    ...mapMutations([
      "setPaymentsListData"
    ]),
    paginationPayment(n) {
      console.log(n)
    },
    changePage(p) {
      this.listCurrent = p
    }
  },
  created() {
    this.$store.dispatch("fetchData")
  },
  computed: {
    ...mapGetters([
      "getPaymentsList", "getFullPaymentValue"
    ]),
    currentElements() {
      return this.getPaymentsList.slice(this.n * (this.listCurrent - 1), this.n * (this.listCurrent - 1) + this.n)
    }
  },
}

</script>

<style scoped lang="scss">
.container {
  margin: auto;
  padding: 0 15px;
  box-sizing: border-box;
}

.title {
  font-size: 24px;
  display: flex;
  justify-content: flex-start;
}

.total {
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
}
</style>
