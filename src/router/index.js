import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AboutView from '../views/AboutView.vue'
import Page404 from "@/views/Page404";
import AddPaymentForm from "@/components/AddPaymentForm";

Vue.use(VueRouter)


const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView
    },
    {
        path: '/about*',
        name: 'About',
        component: AboutView
    },
    {
        path: '/404',
        name: 'NotFound',
        component: Page404
    },
    {
        path: '/auth',
        name: 'Login',
        component: {template: '<form>*AUTH FORM*</form>'}
    },
    {
        path: '/add/:section/:category/',
        name: 'AddPaymentForm',
        component: AddPaymentForm
    },
    {
        path: '*',
        redirect: {name: 'NotFound'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const userAuthExists = true;

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !userAuthExists) {
        next({name: 'Login'})
        alert('Необходимо авторизоваться!')
    } else {
        next()
    }
})

const getTitleRouteName = routeName => {
    return {
        'Dashboard': 'Взгляните на свои платежи и добавьте больше!',
        'About': 'Что-нибудь о нашем удивительном приложении!',
        'NotFound': 'Ой! Кажется, мы потеряли эту страницу :('
    }[routeName]
}

router.afterEach((to) => {
    document.title = getTitleRouteName(to.name)
})

export default router