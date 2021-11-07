import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
// eslint-disable-next-line no-unused-vars
import AllCountries from '@/pages/AllCountries'
import Country from '@/pages/Country'

Vue.use(VueRouter)

 export default new VueRouter({
     mode: 'history',
     base: process.env.BASE_URL,
     routes: [
         {
             path: '/',
             name: 'Home',
             component: Home
         },
         {
            path: '/countries/all',
            name: 'AllCountries',
            component: AllCountries
        },
        {
            path: '/countries/:country',
            name: 'Country',
            component: Country
        }
     ]
 })

