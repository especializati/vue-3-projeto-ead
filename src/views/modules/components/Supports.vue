<template>
  <div class="comments" v-show="lesson.name">
    <div class="header">
      <span class="title">Dúvidas (total: {{ supports.length }}) <span v-if="loading">(Carregando...)</span> </span>
      <button class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>

    <supports/>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

import Supports from '@/components/Supports.vue'

export default {
  name: "SupportsLesson",
  setup() {
    const store = useStore()

    const lesson = computed(() => store.state.courses.lessonPlayer)
    const supports = computed(() => store.state.supports.supports.data)
    const loading = ref(false)

    watch(
      () => store.state.courses.lessonPlayer,
      () => {
        loading.value = true

        store.dispatch('getSupportsOfLesson', lesson.value.id)
              .finally(() => loading.value = false)
      }
    )

    return {
      lesson,
      loading,
      supports,
    }
  },
  components: {
      Supports
  }
};
</script>