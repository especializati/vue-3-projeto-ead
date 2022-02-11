<template>
    <div>
        <div class="pageTitle">
            <span class="title">{{ course.name }}</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <div class="container">
                
                <modules/>

                <div class="right">
                    <div class="content">
                        
                        <player/>

                        <supports-lesson/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

import Modules from './components/Modules.vue'
import Player from './components/Player.vue'
import SupportsLesson from './components/Supports.vue'
import router from "@/router"

export default {
    name: 'ModulesAndLessons',
    setup() {
        const store = useStore()

        const course = computed(() => store.state.courses.courseSelected)

        if (course.value.id === '') {
            router.push({name: 'campus.home'})
        }

        return {
            course
        }
    },
    components: {
        Modules,
        Player,
        SupportsLesson
    }
}
</script>