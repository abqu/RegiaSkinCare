<template>
    <div class="fill-height">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="10" md="10">
          <v-card class="d-flex align-center" color="white">
            <v-row class="mx-10 my-10">
              <v-col cols="12">
                <h3 class="my-5">Registro</h3>
                <v-text-field v-model="registerData.email" label="Correo electrónico" single-line solo />
                <v-text-field v-model="registerData.password" type="password" label="Contraseña" single-line solo/>
                <v-text-field v-model="registerData.passwordVerify" type="password" label="Confirme su contraseña" single-line solo/>
                <v-btn medium block color="primary" @click="signUp(registerData.email.toLowerCase(), registerData.password, registerData.passwordVerify)">
                  Registrarse
                </v-btn>
                <h4 align="center" class="mb-2">
                  <router-link class="caption" to="/login">
                    ¿Ya estás registrado?
                  </router-link>
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
import axios from 'axios';
const {baseURL} = require('../urlHelper');

export default {
    data() {
        return {
            registerData: {email: "", password: "", passwordVerify: ""},
        }
    },
    methods: {
        signUp(email, password, passwordVerify) {
            email = email.toLowerCase();
            if (password !== passwordVerify) {
                this.$swal({
                    title: "Contraseñas no coinciden",
                    icon: "error",
                    text: "Verifique que ambas contraseñas coincidan",
                });
            } else {
                let data = {email, password};
                const url = baseURL + '/api/register';
                axios
                    .post(url, data)
                    .then(response => {
                        sessionStorage.token = response.data.token;
                        this.$router.push('/');
                    })
                    .catch(error => {
                        this.$swal({
                            title: "Error durante el registro",
                            icon: "error",
                            text: error.response.statusText,
                        });
                    });
            }
        }
    }
}
</script>