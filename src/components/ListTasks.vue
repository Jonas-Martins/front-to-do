<template>
  <v-list>
    <v-list-item>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="iconTaskFilter = !iconTaskFilter" text color="purple" dark v-bind="attrs" v-on="on">
            {{ taskFilter }}
            <v-icon v-if="iconTaskFilter" small>mdi-chevron-up</v-icon>
            <v-icon v-else small>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            @click="taskFilter = item.title, iconTaskFilter = !iconTaskFilter"
            link
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      taskFilter: "Filtrar",
      iconTaskFilter: false,
      items: [
        { title: "Todas as tarefas" },
        { title: "Realizadas" },
        { title: "Alta prioridade" },
        { title: "Média prioridade" },
        { title: "Baixa prioridade" },
      ],
    };
  },
};
</script>

<style>
</style>