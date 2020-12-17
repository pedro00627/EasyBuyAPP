import vueRouter from 'vue-router'
import Product from './components/Product'
import Initialpage from './components/InitialPage'
import App from './App'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: Initialpage
            },
            {
                path: '/product/:productid',
                name: "product",
                component: Product
            },
            {
                path: '/inicio/',
                name: "inicio",
                component: Initialpage
            }
        ]
    })

export default router
