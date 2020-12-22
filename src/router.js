import vueRouter from 'vue-router'
import Product from './components/Product'
import Initialpage from './components/InitialPage'
import Category from './components/Category'
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
                path: '/inicio/',
                name: "inicio",
                component: Initialpage
            },
            {
                path: '/product/',
                name: "product",
                component: Product
            },
            {
                path: '/category/',
                name: "category",
                component: Category
            },
        ]
    })

export default router
