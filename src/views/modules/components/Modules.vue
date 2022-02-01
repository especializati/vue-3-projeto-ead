<template>
  <div class="left">
    <div class="card">
      <div class="title bg-laravel">
        <span class="text">Modulos</span>
        <span class="icon far fa-stream"></span>
      </div>

      <div class="modules" v-for="module in modules" :key="module.id">
        <div class="name">
          <span class="text">{{ module.name }}</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul class="classes">
          <li v-for="lesson in module.lessons" :key="lesson.id">
            <span v-if="lesson.views.length > 0" class="check active fas fa-check"></span>
            <span class="nameLesson">{{ lesson.name }}</span>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'Modules',
    setup() {
        const store = useStore()

        // const course = computed(() => store.state.courses.courseSelected)
        const modules = computed(() => store.state.courses.courseSelected.modules)

        return {
          // course,
          modules,
        }
    },
}
</script>