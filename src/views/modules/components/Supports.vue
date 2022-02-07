<template>
  <div class="comments" v-show="lesson.name">
    <div class="header">
      <span class="title">Dúvidas (total: {{ supports.length }}) <span v-if="loading">(Carregando...)</span> </span>
      <button class="btn primary"
        @click.prevent="openModal">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>

    <supports/>

    <modal-support
      :show-modal="modal.showModal"
      :support-reply="modal.supportReply"
      @closeModal="modal.showModal = false">
    </modal-support>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

import Supports from '@/components/Supports.vue'
import ModalSupport from '@/components/SupportModal.vue'

export default {
  name: "SupportsLesson",
  setup() {
    const store = useStore()

    const lesson = computed(() => store.state.courses.lessonPlayer)
    const supports = computed(() => store.state.supports.supports.data)
    const loading = ref(false)

    const modal = ref({
      showModal: false,
      supportReply: ''
    })
    const openModal = () => modal.value = {showModal: true, supportReply: ''}

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
      modal,
      openModal,
    }
  },
  components: {
      Supports,
      ModalSupport
  }
};
</script>