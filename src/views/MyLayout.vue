<template>
  <section class="grid">
    <div class="sidenav">Sidenav</div>
    <div class="nav">Nav</div>
    <div class="content">
      <v-row style="height: 100%;">
        <v-col cols="5">
          <Progress class="pa-3"/>
        </v-col>
        <v-col cols="7">
          <ListTasks class="pa-3"/>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Progress: () => import("@/components/ProgressTasks.vue"),
    ListTasks: () => import("@/components/ListTasks.vue"),
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template:
    "sidenav nav" 10vh
    "sidenav content" 90vh
    / 0.1fr 1fr;
}
.nav {
  grid-area: nav;
  background-color: #9c27b08a;
}

.content {
  grid-area: content;
}

.sidenav {
  grid-area: sidenav;
  background-color: #9c27b0;
}
</style>
