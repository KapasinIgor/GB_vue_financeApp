<template>
<button class="myBtn" @click="$emit('click')"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped lang="scss">
.myBtn {
  border-radius: 5px;
  background-color: #42b983;
  border: none;
  padding: 5px 10px;
  margin: 10px 0;
  font-size: 14px;
  display: flex;
  max-width: 200px;
  &:active {
    background-color: mediumaquamarine;
  }
}
</style>