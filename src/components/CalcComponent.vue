<template>
  <div class="calculator">
    <h3>{{ msg }}</h3>

    <div class="display">
      <input class="inp" v-model.number="operand1">
      <input class="inp" v-model.number="operand2">
    </div>

    <div class="keyboard">
      <button
          class="btns"
          v-for="operand in operands"
          :key="operand"
          @click="calculate(operand)"
          :title="operand"
      >
        {{ operand }}
      </button>
    </div>

    <div v-show="error">Ошибка! {{ error }}</div>
    <div class="result">Результат = {{ result }}</div>

    <div class="strange-message">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Получилось слишком большое число</template>
    </div>

    <div class="fib">Фибоначчи({{ fibb1 }}, {{ fibb2 }}) = {{ fibResult }}</div>

    <div class="checkVirtKeyb">
      <input type="checkbox" id="checkVK" v-model="showVirtKeyb">
      <label for="checkVK">Отобразить экранную клавиатуру</label>
    </div>

    <div v-if="showVirtKeyb">
      <div>
        <button
            class="virtBtn"
            v-for="virtKey in virtualKeyboard"
            :key="virtKey"
            @click="pressNumbVK(activeForm, virtKey)"
        >
          {{ virtKey }}
        </button>
        <button class="virtBtn" @click="eraseLastNumber(activeForm)">del</button>
      </div>
      <div>
        <input type="radio" id="radioOper1" value="operand1" v-model="activeForm">
        <label for="radioOper1">Операнд 1</label>
        <input type="radio" id="radioOper2" value="operand2" v-model="activeForm">
        <label for="radioOper2">Операнд 2</label>
      </div>
    </div>



    <hr>
    <div class="logs" v-for="(log, id) in logs" :key="id">{{ log }}</div>
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
      fibResult: 0,
      error: '',
      operands: ['+', '-', '/', '*', 'цчд', '^'],
      virtualKeyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      logs: {},
      showVirtKeyb: false,
      activeForm: 'operand1',
    }
  },
  props: {
    msg: {
      type: String
    }
  },
  methods: {
    add() {
      this.result = this.operand1 + this.operand2
      this.fibResult = this.fibb1 + this.fibb2
    },
    substr() {
      this.result = this.operand1 - this.operand2
      this.fibResult = this.fibb1 - this.fibb2
    },
    divide() {
      const {operand1, operand2} = this
      if (operand2 !== 0) {
        this.result = operand1 / operand2;
        this.fibResult = this.fibb1 / this.fibb2;
      } else {
        this.error = 'На ноль делить нельзя!'
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2
      this.fibResult = this.fibb1 * this.fibb2
    },
    intdiv() {
      const {operand1, operand2} = this
      if (operand2 !== 0) {
        this.result = Math.trunc(operand1 / operand2);
        this.fibResult = Math.trunc(this.fibb1 / this.fibb2);
      } else {
        this.error = 'На ноль делить нельзя!'
      }
    },
    deg() {
      this.result = Math.pow(this.operand1, this.operand2)
      this.fibResult = Math.pow(this.fibb1, this.fibb2)
    },
    calculate(operation = '+') {
      this.error = ''
      switch (operation) {
        case '+':
          this.add()
          break;
        case '-':
          this.substr()
          break;
        case '*':
          this.multiply()
          break;
        case '/':
          this.divide()
          break
        case 'цчд':
          this.intdiv()
          break
        case '^':
          this.deg()
          break
      }
      const key = Date.now()
      const value = `${this.operand1}${operation}${this.operand2} = ${this.result}`
      this.$set(this.logs, key, value)
    },
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2)
    },
    pressNumbVK(operand, key) {
      if (operand === 'operand1') {
        this.operand1 = +`${this.operand1}${key}`
      }
      if (operand === 'operand2') {
        this.operand2 = +`${this.operand2}${key}`
      }
    },
    eraseLastNumber(operand) {
      if (operand === 'operand1') {
        this.operand1 = +String(this.operand1).slice(0, -1)
      }
      if (operand === 'operand2') {
        this.operand2 = +String(this.operand2).slice(0, -1)
      }
    }
  },
  computed: {
    fibb1() {
      return this.fib(this.operand1)
    },
    fibb2() {
      return this.fib(this.operand2)
    },
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
  height: auto;
  border: 2px solid mediumseagreen;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px;
}

.display {
  display: flex;
  justify-content: center;
}

.inp {
  margin: 10px 5px;
  height: 20px;
  width: 120px;
  border: solid 2px mediumseagreen;
  padding-left: 5px;
  outline: none;
  border-radius: 8px;
}

.btns {
  height: 40px;
  width: 40px;
  border: solid 2px mediumseagreen;
  border-radius: 50% 20% / 10% 40%;
  margin: 0 4px 10px 4px;
  font-size: 18px;
}

hr {
  border: 1px solid mediumseagreen;
  border-radius: 50%;
  width: 300px;
}

.virtBtn {
  font-size: 14px;
  border: 2px solid mediumseagreen;
  padding: 0 5px;
  margin: 10px 1px 5px 1px;

  &:not(:last-child) {
    border-radius: 50%
  }

  &:last-child {
    border-radius: 5px
  }
}

</style>
