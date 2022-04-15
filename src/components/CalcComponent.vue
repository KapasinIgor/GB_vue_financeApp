<template>
  <div class="calculator">
    <h4>{{ msg }}</h4>
    <div class="display">
      <input class="inp" v-model.number="operand1">
      <input class="inp" v-model.number="operand2">
    </div>
    <div class="keyboard">
      <button class="btns" @click="result = operand1 + operand2">+</button>
      <button class="btns" @click="result = operand1 - operand2">-</button>
      <button class="btns" @click="sub" name="subBtn">/</button>
      <button class="btns" @click="multiply">*</button>
      <button class="btns" @click="cel" name="celBtn">цчд</button>
      <button class="btns" @click="quad">^</button>
    </div>
    <div class="result">= {{ result }}</div>
  </div>
</template>

<script>
export default {
  name: 'CalcComponent',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    }
  },
  props: {
    msg: {
      type: String,

    }
  },
  methods: {
    sub() {
      const {operand1, operand2} = this
      if (operand2 !== 0) {
        this.result = operand1 / operand2;
      } else {
        this.result = 'На ноль делить нельзя'
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2
    },
    cel() {
      const {operand1, operand2} = this
      if (operand2 !== 0) {
        this.result = Math.trunc(operand1 / operand2);
      } else {
        this.result = 'На ноль делить нельзя'
      }
    },
    quad() {
      const {operand1, operand2} = this
      this.result = Math.pow(operand1, operand2)
    }
  }
}
</script>

<style scoped lang="scss">
.calculator {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  height: 250px;
  border: 2px solid mediumseagreen;
  box-sizing: border-box;
}
.display {
  display: flex;
  justify-content: center;
}
.inp {
  margin: 0 5px;
  height: 20px;
  width: 120px;
  border: solid 2px mediumseagreen;
  padding-left: 5px;
  outline: none;
}
.btns {
  height: 40px;
  width: 40px;
  border: solid 2px mediumseagreen;
  border-radius: 50% 20% / 10% 40%;
  margin: 0 4px;
  font-size: 18px;
}
</style>
