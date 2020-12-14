import vueRouter from 'vue-router'
import Product from './components/Product'
import ProductCreate from './components/ProductCreate'
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
                path: '/Product/:Productname',
                name: "Product",
                component: Product
            },
            {
                path: '/Product/create/:Productname',
                name: "Product_Create",
                component: ProductCreate
            },
            {
                path: '/Product/update/:Productname',
                name: "Product_Update",
                component: ProductUpdate
            },
            {
                path: '/Product/get/:Productname',
                name: "Product_Get",
                component: ProductGet
            },
        ]
    })

export default router
