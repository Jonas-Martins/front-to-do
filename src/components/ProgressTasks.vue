<template>
  <div>
    <v-list width="100%" height="100%">
      <v-list-item-title class="d-flex align-center" style="height: 30px">
        Progresso do dia
        <v-progress-linear
          style="width: 50%"
          color="purple"
          class="mx-2"
        ></v-progress-linear>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dateTasks"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="dateTasks | dateMonth"
              v-bind="attrs"
              v-on="on"
              color="purple"
            ></v-text-field>
          </template>
          <v-date-picker color="purple" v-model="dateTasks" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(dateTasks)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-list-item-title>
      <v-list-item-subtitle
        >Tarefas: <b style="color: #9c27b0">3/6</b></v-list-item-subtitle
      >
      <v-list-item class="d-flex justify-center my-16">
        <v-progress-circular
          :rotate="-90"
          :size="270"
          :width="35"
          :value="value"
          color="#9c27b0"
        >
          <v-list-item>
            <v-list-item-content style="text-align: center">
              <v-list-item-title style="color: #9c27b0; font-size: 40px"
                ><b>{{ value }}%</b></v-list-item-title
              >
              <v-list-item-subtitle style="color: #9c27b0; font-size: 20px"
                >Completo</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-progress-circular>
      </v-list-item>
      <v-list-item-subtitle style="text-align: center">
        <v-icon color="purple">mdi-information-outline</v-icon>
        Restam 3 tarefas para serem realizadas!
      </v-list-item-subtitle>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 81,
      dateTasks: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
    };
  },
  filters: {
    dateMonth(value) {
      // const date = value.split("-");
      // const y = date[0];
      // const m = date[1];
      // const d = date[2];
      var meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      var days = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
      ];
      const data = value.split("-").reverse().join("/");
      var formatData = data.replace(/(\d{2})(\/)(\d{2})/, "$3$2$1");

      var newData = new Date(formatData);

      return (
        newData.getDate() +
        " " +
        meses[newData.getMonth()] +
        " (" +
        days[newData.getDay()] +
        ")"
      );
    },
  },
};
</script>

<style scoped>
.v-progress-circular {
  font-size: 50px;
}
</style>