<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn 
        href="/"
        text>
        <h1 class="mr-2">Regia Skin Care</h1>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn v-if='isNotAuthenticated()'
        href="/login"
        text
      >
        <span class="mr-2">Iniciar sesión</span>
      </v-btn>
    </v-app-bar>

    <v-main>
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
  methods: {
    isNotAuthenticated() {
      return localStorage.getItem("token") === null;
    }
  }
};
</script>
