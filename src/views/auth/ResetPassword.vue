<template>
    <section id="loginPage"
        :style="{
            backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') + ')'
        }">
        <div class="loginContent">
            <div class="loginCard">
                <div class="decor" style="background-image: url('./assets/images/building.jpg');">
                    <div class="content">
                        <span class="logo">
                            <img :src="require('@/assets/images/logo.svg')" alt="EspecializaTi">
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            <p>
                                Os melhores e mais completos cursos de Laravel do Brasil, cursos com projetos reais. Do zero ao profissional.
                            </p>
                        </span>
                        <span class="copyright fontSmall">
                            Todos os Direitos reservados - <b>Especializati</b>
                        </span>
                    </div>
                </div>
                <div class="login">
                    <div class="content">
                        <span class="logo"
                            ><img :src="['./assets/images/logoDark.svg']" alt="" />
                        </span>
                        <span>
                            <p>Seja muito bem vindo(a)!</p>
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            Acesse nossa plataforma e desfrute de cursos completos para sua especialização.
                        </span>
                        <form action="/dist/index.html" method="">
                            <div class="groupForm">
                                <i class="far fa-envelope"></i>
                                <input type="email" name="email" placeholder="E-mail" v-model="email" required>
                            </div>
                            <div class="groupForm">
                                <i class="far fa-key"></i>
                                <input :type="typePassword" name="password" placeholder="Senha" v-model="password" required>
                                <i class="far fa-eye buttom" @click="toggleShowPassword"></i>
                            </div>
                            <button
                                :class="[
                                    'btn',
                                    'primary',
                                    loading ? 'loading' : ''
                                ]"
                                type="submit"
                                @click.prevent="auth">
                                <span v-if="loading">Alterando...</span>
                                <span v-else>Mudar Senha</span>
                            </button>
                        </form>
                    </div>
                    <span class="copyright fontSmall">
                        Todos os Direitos reservados - <b>Especializati</b>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'
import { notify } from "@kyvg/vue3-notification"

import router from '@/router'
import ResetPasswordService from '@/services/password.reset.service'

export default {
    name: 'ResetPassword',
    props: {
        token: {
            require: true,
        }
    },
    setup(props) {
        const email = ref("")
        const password = ref("")
        const loading = ref(false)

        const typePassword = ref('password')
        const toggleShowPassword = () => typePassword.value = typePassword.value === 'password' ? 'text' : 'password'

        const auth = () => {
            loading.value = true

            ResetPasswordService.reset({
                email: email.value,
                password: password.value,
                token: props.token,
            })
            .then(() => {
                notify({
                    title: 'Sucesso',
                    text: 'Senha Atualizada com sucesso'
                })

                router.push({name: 'auth'})
            })
            .catch(() => notify({
                    title: 'Falha',
                    text: 'Falha ao recuperar o usuário',
                    type: "warn"
                }))
            .finally(() => loading.value = false)
        }

        return {
            auth,
            email,
            password,
            loading,
            typePassword,
            toggleShowPassword
        }
    }
}
</script>