<template>
  <div class="fill-height">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="10" md="10">
          <v-card class="d-flex align-center" color="white">
            <v-row class="mx-10 my-10">
              <v-col cols="12">
                <h3 class="my-5">Agregar nuevo producto</h3>
                <v-text-field v-model="item.name" :rules="[rules.required]" label="Nombre del producto" single-line solo />
                <v-currency-field v-model="item.price" :rules="[rules.required]" label="Precio del producto" single-line solo/>
                <v-file-input v-model="item.image" chips accept="image/*" prepend-icon="mdi-camera" :rules="[rules.required]" label="Imagen del producto" single-line solo />
                <v-textarea v-model="item.description" clearable clear-icon="mdi-close-circle" label="Descripción del producto" />
                <v-btn medium block color="primary" @click="uploadItem(item.name, item.description, item.price, item.image)">
                  Agregar nuevo producto
                </v-btn>
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
            item: {
                name: "", 
                description: "", 
                price: 0,
            },
            rules: {
                required: value => !!value || "Campo obligatorio",
            },
        };
    },
    methods: {
      uploadItem(name, description, price, image) {
        const url = baseURL + '/api/item';
        const data = new FormData();
        data.append('image', image);
        data.append('name', name);
        data.append('description', description);
        data.append('price', price);
        axios
          .post(url, data, {
            headers: {
              sessiontoken : localStorage.getItem('token'),
            },
          }).then(response => {
            console.log(response);
            window.open('/addItem', "_self");
          }).catch(error => {
            this.$swal({
              title: "Error al agregar artículo",
              icon: "error",
              text: error.response.statusText,
            });
          });
      },
    }
}
</script>