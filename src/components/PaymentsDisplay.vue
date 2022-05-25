<template>
  <div>
    <v-row class="font-weight-bold">
      <v-col :cols="1">#</v-col>
      <v-col :cols="3">Дата</v-col>
      <v-col :cols="4">Категория</v-col>
      <v-col :cols="2">Цена</v-col>
    </v-row>
    <v-divider class="my-4"/>
    <v-row v-for="(item, index) in items" :key="index">
      <v-col :cols="1">{{ index + 1 }}</v-col>
      <v-col :cols="3">{{ item.date }}</v-col>
      <v-col :cols="4">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>


      <v-menu
          :offset-x="true"
      >
        <template v-slot:activator="{ on }">
          <v-btn
              icon
              v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-dialog
              v-model="dialog"
              width="500"
          >
            <template v-slot:activator="{ on }">
              <v-list-item
                  v-on="on"
              >
                <v-icon>mdi-pencil</v-icon>
                &nbsp;Редактировать
              </v-list-item>
            </template>
            <v-card>
              <AddPaymentForm titleText="Редактировать" :values="{item}"/>
            </v-card>
          </v-dialog>

          <v-list-item @click="deleteItem(item)"><v-icon>mdi-delete</v-icon>&nbsp;Удалить</v-list-item>
        </v-list>
      </v-menu>


    </v-row>
    <v-divider class="my-4"/>
  </div>
</template>

<script>
import AddPaymentForm from "@/components/AddPaymentForm";

export default {
  name: "PaymentsDisplay",
  components: {AddPaymentForm},
  data() {
    return {
      dialog: false
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    deleteItem(item) {
      this.$store.commit('deleteDataToPaymentList', item)
    },
  }
}
</script>

<style module lang="scss">

</style>