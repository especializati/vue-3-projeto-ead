<template>
  <div class="content">

    <div class="card" v-for="support in supports.data" :key="support.id">
      <div class="commentContent main">
        <span class="avatar">
          <img :src="[
            support.user.image ?
            support.user.image :
            '@/assets/images/avatars/user01.svg'
          ]" :alt="support.user.name" />
        </span>
        <div class="comment">
          <div class="balloon">
            <span class="fas fa-sort-down"></span>
            <span class="owner">{{ support.user.name }} - {{ support.dt_updated }}</span>
            <span class="text">{{ support.description }}</span>
          </div>
        </div>
        <button class="btn primary">Ocultar respostas</button>
      </div>
      <div class="answersContent" v-for="reply in support.replies" :key="reply.id">
        <div class="commentContent rightContent">
          <div class="comment">
            <div class="balloon">
              <span class="fas fa-sort-down"></span>
              <span class="owner">{{ reply.user.name }} - {{ reply.date }}</span>
              <span class="text" v-text="reply.description"></span>
            </div>
          </div>
          <span class="avatar">
            <img :src="
              [
              reply.user.image ?
              reply.user.image :
              '@/assets/images/avatars/user01.svg'
            ]" :alt="reply.user.name" />
          </span>
        </div>
        <div class="commentContent">
          <span class="avatar">
            <img src="images/avatars/user01.svg" alt="" />
          </span>
          <div class="comment">
            <div class="balloon">
              <span class="fas fa-sort-down"></span>
              <span class="owner">Fernando - 07/10/2021</span>
              <span class="text">
                In eleifend urna sapien, faucibus pharetra justo luctus quis.
                Vivamus eleifend fringilla massa
              </span>
            </div>
          </div>
        </div>
        <span class="answer">
          <button class="btn primary">Responder</button>
        </span>
      </div>
    </div>
    
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'

export default {
  name: "Supports",
  setup() {
    const store = useStore()

    const supports = computed(() => store.state.supports.supports)

    return {
      supports
    }
  }
};
</script>