<template>
  <div class="home container">
    <header>
      <div class="title">Мои личные расходы</div>
    </header>
    <main>
      <MyButton @click="showAddForm = !showAddForm">Добавить новую запись +</MyButton>
      <AddPaymentForm v-show="showAddForm" @addNewPayment="addNewPayment"/>
      <PaymentsDisplay :items="paymentList" @onClickNumber="paginationPayment"/>
      <MyPagination :listLength="paymentList.length"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from "@/components/AddPaymentForm";
import MyButton from "@/components/MyButton";
import MyPagination from "@/components/MyPagination";

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
      paymentList: [],
      showAddForm: false,
    }
  },
  methods: {
    fetchData() {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        }
      ]
    },
    addNewPayment(data) {
      this.paymentList = [...this.paymentList, data]
    },
    paginationPayment(n) {
      console.log(n)
    }
  },
  created() {
    this.paymentList = this.fetchData()
  }
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
</style>
