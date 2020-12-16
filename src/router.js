import vueRouter from 'vue-router'
import Product from './components/Product'
//import ProductCreate from './components/ProductCreate'
import App from './App'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/product/:productid',
                name: "product",
                component: Product
            },
        ]
    })

export default router
