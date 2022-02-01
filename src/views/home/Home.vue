<template>
  <div>
    <div class="pageTitle">
            <span class="title">Meus Cursos</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <ul class="listCourses">
                <card-course
                  :title="'Curso de Laravel com Vue.js'"
                  :image="''"
                  :bgName="'laravel'">
                </card-course>
            </ul>
        </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import CardCourse from './components/CardCouse.vue'

export default {
  name: "Home",
  setup() {
    const store = useStore()

    onMounted(() => store.dispatch('getCourses'))
  },
  components: {
    CardCourse
  }
};
</script>
