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
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
    name: 'DefaultTemplate',
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>