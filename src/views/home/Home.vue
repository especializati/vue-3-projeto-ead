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
                  class="animate__animated animate__headShake"
                  v-for="course in courses"
                  :key="course.id"
                  :bgName="'laravel'"
                  :course="course">
                </card-course>
            </ul>
        </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import CardCourse from './components/CardCouse.vue'

export default {
  name: "Home",
  setup() {
    const store = useStore()

    const courses = computed(() => store.state.courses.myCourses)

    onMounted(() => store.dispatch('getCourses'))

    return {
      courses
    }
  },
  components: {
    CardCourse
  }
};
</script>
