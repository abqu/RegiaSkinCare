import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Register from '../components/Register'
import AddItem from '../components/AddItem'
import ItemDesc from '../components/ItemDesc'
import Items from '../components/Items'
import Cart from '../components/Cart'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/addItem',
        name: 'AddItem',
        component: AddItem
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    },
    {
        path: '/items/:id',
        name: 'ItemDescription',
        component: ItemDesc
    },
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/editItem/:itemId',
        name: 'EditItem',
        component: AddItem,
    },
]
});

export default router;
