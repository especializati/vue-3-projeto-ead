<template>
    <div>
        <header-component/>

        <section>
            <router-view></router-view>
        </section>

        <footer-component/>
    </div>
</template>

<script>
import { onBeforeMount } from 'vue'

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
    name: 'DefaultTemplate',

    setup() {
        onBeforeMount(() => {
            document.body.classList.add('page')
            document.body.classList.add('dark')

            document.title = 'Curso EAD com Vue.js 3 - EspecializaTI'
        })
    },

    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>