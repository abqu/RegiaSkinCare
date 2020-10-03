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
        <v-toolbar-title class="mr-2 pacifico">Regia Skin Care</v-toolbar-title>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn v-if="iAmAdmin()"
        href="/addItem"
        text>
        <v-icon medium>mdi-plus</v-icon>
      </v-btn>
      <v-btn v-if='isNotAuthenticated()'
        href="/login"
        text
      >
        <v-icon medium>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
const {baseURL} = require('./urlHelper');

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
  methods: {
    isNotAuthenticated() {
      return sessionStorage.getItem("token") === null;
    },
    iAmAdmin() {
      if (sessionStorage.getItem("token") === null) {
        return false;
      }
      const url = baseURL + '/api/user/amIAdmin';
      return axios.get(url, {
        headers: {
          'sessiontoken' : sessionStorage.getItem("token"),
        },
      }).then(response => response.status === 200)
      .catch(error => {
        console.log(error);
        return false;
      })
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.pacifico {
  font-family: 'Pacifico', cursive;
}
</style>