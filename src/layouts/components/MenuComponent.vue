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
                    <a href="">Sair</a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Menu',
}
</script>