<template>
  <div class="paymentList">
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Дата</th>
        <th>Категория</th>
        <th>Цена, ₽</th>
      </tr>
      </thead>
      <tbody>
      <tr class="paymentItem" v-for="(item, index) in items" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style module lang="scss">
table {
  width: 500px;
  font-size: 20px;
  margin: 10px 0;
  border-collapse: collapse;
}
th {
  padding: 5px;
  border-bottom: 1px solid mediumaquamarine;
  &:not(:last-child) {
    border-right: 1px solid mediumaquamarine;
  }
}
td {
  padding: 5px;
  &:not(:last-child) {
    border-right: 1px solid mediumaquamarine;
  }
}
</style>