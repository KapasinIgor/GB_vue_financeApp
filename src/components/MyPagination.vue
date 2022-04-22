<template>
  <div class="pagination">
    <ul>
      <li>&lt;</li>
      <li
          v-for="n in numbersPagination"
          :key="n"
          @click="onClickNumber"
      >
        {{ n }}
      </li>
      <li>&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  data() {
    return {
      limitPayment: 5,
    }
  },
  props: {
    listLength: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClickNumber() {
      this.$emit('onClickNumber', this.n)
    }
  },
  computed: {
    numbersPagination() {
      return  Math.ceil(this.listLength / this.limitPayment)
    }
  }
}
</script>

<style scoped lang="scss">
.pagination {
  max-width: 500px;
}

ul {
  display: flex;
  justify-content: center;
  border: 1px solid mediumaquamarine;
}

li {
  list-style-type: none;
  margin: 3px 10px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: crimson;
  }
}
</style>