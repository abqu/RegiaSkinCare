<template>
    <div class="fill-height">
        <h1 align="center">Artículos en el carrito de compras</h1>
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="(cartItem, index) in cart" :key="index">
                <v-card>
                    <v-img height="250" :src="cartItem.item.imageUrl" />
                    <v-card-title>{{cartItem.item.name}}</v-card-title>
                    <v-card-text>
                        <div class="my-4 subtitle-1">
                            Cantidad: {{cartItem.quantity}}
                        </div>
                        <div class="my-4 subtitle-1">
                            Precio: $ {{price(cartItem.item.price, cartItem.quantity)}}
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    color="red lighten-2"
                                    @click="deleteItem(cartItem.id)"
                                    v-on="on">
                                    <v-icon>mdi-cart-off</v-icon>
                                </v-btn>
                            </template>
                            <span>Remover artículo del carrito</span>
                        </v-tooltip>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios';
import helper from '../urlHelper';

export default {
    data() {
        return {
            cart: [],
        };
    },
    methods: {
        price: (itemPrice, quantity) => (itemPrice * quantity / 100.0).toFixed(2),
        async deleteItem(cartItemId) {
            const token = sessionStorage.getItem('token');
            const URL = helper.baseURL + '/api/cart/' + cartItemId;
            const response = await axios.delete(URL, {
                headers: {
                    sessiontoken: token,
                }
            });
            if (response && response.status === 200) {
                this.cart = response.data;
            }
        }
    },
    async beforeMount() {
        const token = sessionStorage.getItem('token');
        const URL = helper.baseURL + '/api/cart';
        const response = await axios.get(URL, {
            headers: {
                sessiontoken: token,
            }
        });
        this.cart = response.data;
    },
}
</script>