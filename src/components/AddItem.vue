<template>
  <div class="fill-height">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="10" md="10">
          <v-card class="d-flex align-center" color="white">
            <v-row class="mx-10 my-10">
              <v-col cols="12">
                <h3 class="my-5">Agregar nuevo producto</h3>
                <v-text-field
                  v-model="item.name"
                  :rules="[rules.required]"
                  label="Nombre del producto"
                  single-line
                  solo
                />
                <v-currency-field
                  v-model="item.price"
                  :rules="[rules.required]"
                  label="Precio del producto"
                  single-line
                  solo
                />
                <v-file-input
                  v-model="item.image"
                  chips
                  accept="image/*"
                  prepend-icon="mdi-camera"
                  :rules="[rules.required]"
                  label="Imagen del producto"
                  single-line
                  solo
                />
                <v-textarea
                  v-model="item.description"
                  clearable
                  clear-icon="mdi-close-circle"
                  label="Descripción del producto"
                />
                <v-btn
                  medium
                  block
                  color="primary"
                  @click="
                    uploadItem(
                      item.name,
                      item.description,
                      item.price,
                      item.image
                    )
                  "
                >
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
const { baseURL } = require("../urlHelper");

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
              sessiontoken : sessionStorage.getItem('token'),
            },
          }).then(response => {
            console.log(response);
            this.$router.push('/addItem');
          }).catch(error => {
            this.$swal({
              title: "Error al agregar artículo",
              icon: "error",
              text: error.response.statusText,
            });
          });
      },
    };
  },
  methods: {
    async uploadItem(name, description, price, image) {
      const url = baseURL + "/api/item/";
      const data = new FormData();
      data.append("image", image);
      data.append("name", name);
      data.append("description", description);
      data.append("price", price);
      const itemId = this.$route.params.itemId;
      const headers = {
        headers: {
          sessiontoken: sessionStorage.getItem("token"),
        },
      };
      const response = await (itemId
        ? axios.put(url + itemId, data, headers)
        : axios.post(url, data, headers));
      console.log(response);
      if (!response || !(response.status !== 200 || response.status !== 201)) {
        this.$swal({
          title: "Error en la operación",
          icon: "error",
          text: "No se logró realizar la operación en el artículo",
        });
      } else {
        this.$swal({
          title: "Operación exitosa",
          icon: "success",
          text: "Se logró realizar la operación en el artículo",
        });
        this.$router.push("/");
      }
    },
  },
  async beforeMount() {
    if (!this.$route.params.itemId) {
      return;
    }
    const URL = baseURL + "/api/item/" + this.$route.params.itemId;
    const response = await axios.get(URL);
    if (!response) {
      return;
    }
    this.item.name = response.data.name;
    this.item.price = (Number(response.data.price) / 100).toFixed(2);
    this.item.description = response.data.description;
  },
};
</script>
