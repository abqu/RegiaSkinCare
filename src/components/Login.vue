<template>
  <div class="fill-height">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="10" md="10">
          <v-card class="d-flex align-center" color="white">
            <v-row class="mx-10 my-10">
              <v-col cols="12">
                <h3 class="my-5">Iniciar sesión</h3>
                <v-text-field v-model="login.email" :rules="[rules.required]" label="Correo electrónico" single-line solo />
                <v-text-field v-model="login.password" :rules="[rules.required]" type="password" label="Contraseña" single-line solo/>
                <v-btn medium block color="primary" @click="logIn(login.email.toLowerCase(), login.password)">
                  Log in
                </v-btn>
                <h4 align="center" class="mb-2">
                  <a class="caption" href="/register">
                    ¿No estás registrado?
                  </a>
                </h4>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import axios from "axios";
const {baseURL} = require('../urlHelper');

export default {
  data() {
    return {
      login: {email: "", password: ""},
      rules: {
        required: value => !!value || "Campo obligatorio",
      },
    };
  },
  methods: {
    logIn(email, password) {
      email = email.toLowerCase();
      let data = {email, password};
      const url = baseURL + '/api/login';
      axios
        .post(url, data)
        .then(response => {
          localStorage.token = response.data.token;
          window.open('/', "_self");
        })
        .catch(error => {
          this.$swal({
            title: "Error al iniciar sesión",
            icon: "error",
            text: error.response.statusText,
          });
        });
    }
  }
}
</script>