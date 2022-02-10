<template>
    <div>
        <transition name="fade">
            <ul id="mainMenu">
                <li>
                    <router-link :to="{name: 'campus.home'}">Início</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'campus.my.supports'}">Minhas Dúvidas</router-link>
                </li>
                <li>
                    <a href="#" @click.prevent="logout">
                        <span v-if="loadingStore">Saindo...</span>
                        <span v-else>Sair</span>
                    </a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import router from "@/router"

export default {
    name: 'Menu',
    setup() {
        const store = useStore()

        const logout = () => {
            store.dispatch('logout')
                    .then(() => router.push({name: 'auth'}))
        }
        const loadingStore = computed(() => store.state.loading)

        return {
            logout,
            loadingStore,
        }
    }
}
</script>