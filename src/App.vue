<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn @click="$router.push('/')" text>
        <v-toolbar-title class="mr-2 pacifico">Regia Skin Care</v-toolbar-title>
      </v-btn>

      <v-spacer></v-spacer>

      <v-tooltip bottom v-if="iAmAdmin()">
        <template v-slot:activator="{ on }">
          <v-btn @click="$router.push('/addItem')" text v-on="on">
            <v-icon medium>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Agregar artículo</span>
      </v-tooltip>

      <v-tooltip bottom v-if="isNotAuthenticated()">
        <template v-slot:activator="{ on }">
          <v-btn @click="$router.push('/login')" text v-on="on">
            <v-icon medium>mdi-login</v-icon>
          </v-btn>
        </template>
        <span>Iniciar sesión</span>
      </v-tooltip>
      <div v-else>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn @click="$router.push('cart')" text v-on="on">
              <v-icon medium>mdi-cart</v-icon>
            </v-btn>
          </template>
          <span>Carrito de compra</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn @click="logOut()" v-on="on" text>
              <v-icon medium>mdi-logout</v-icon>
            </v-btn>
          </template>
          <span>Cerrar sesión</span>
        </v-tooltip>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
const { baseURL } = require("./urlHelper");

export default {
  name: "App",

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
      const url = baseURL + "/api/user/amIAdmin";
      return axios
        .get(url, {
          headers: {
            sessiontoken: sessionStorage.getItem("token"),
          },
        })
        .then((response) => response.status === 200)
        .catch((error) => {
          console.log(error);
          return false;
        });
    },
    logOut() {
      sessionStorage.removeItem("token");
      this.$swal({
        title: "Sesión cerrada",
        text: "Has cerrado sesión",
        icon: "success",
      });
      this.$router.push("/");
      this.$forceUpdate();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.pacifico {
  font-family: "Pacifico", cursive;
}
</style>