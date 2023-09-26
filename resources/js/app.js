import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './components/App.vue';
import ProductList from './components/ProductList.vue';
import ProductForm from './components/ProductForm.vue';
import Product from './components/Product.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ProductList },
        { path: '/products/create', component: ProductForm },
        { path: '/products/:id', component: Product },
        { path: '/products/:id/edit', component: ProductForm },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
