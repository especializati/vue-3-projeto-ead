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
import CardCourse from './components/CardCouse.vue'

export default {
  name: "Home",
  components: {
    CardCourse
  }
};
</script>
