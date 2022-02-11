<template>
  <div class="pagination">
    <ul class="pagination-2">
      <li v-if="meta.current_page > 1" class="page-number" @click.prevent="changePage(meta.last_page - 1)">
        <a
          href="#"
          class="page-link"
          aria-label="Previous"
        >
          <span aria-hidden="true">«</span>
        </a>
      </li>

      <li
        v-for="(page, index) in pagesArray"
        :key="index"
        :class="[
          'page-number',
          { active : meta.current_page == page },
        ]"
        @click.prevent="changePage(page)"
      >
        <a href="#" class="page-link">
          {{ page }}
        </a>
      </li>

      <li v-if="meta.current_page < meta.last_page" class="page-number prev" @click.prevent="changePage(meta.last_page + 1)">
        <a
          href="#"
          class="page-link"
          aria-label="Next"
        >
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue"

export default {
  name: "Pagination",
  props: {
    pagination: {
      type: Object,
      required: true,
      default: () => {
        return {
          data: [],
          links: {
            first: "",
            last: "",
            next: "",
            prev: "",
          },
          meta: {
            current_page: 1,
            from: 1,
            last_page: 1,
            links: [],
            path: "",
            per_page: 0,
            to: 0,
            total: 0,
          },
        };
      },
    },
  },
  setup(props, { emit }) {
    const changePage = (page) => emit("changePage", page);

    const pagesArray = ref([]);
    watch(()=> props.pagination.meta, () => {
        pagesArray.value = []
        for (let page = 1; page <= props.pagination.meta.last_page; page++) {
            pagesArray.value.push(page);
        }
    })

    const meta = computed(() => props.pagination.meta)

    return {
      changePage,
      pagesArray,
      meta,
    };
  },
};
</script>

<style scoped>
.pagination ul {
  margin: 2em auto;
  padding-left: 0;
  list-style-type: none;
}

.page-number {
  display: inline;
}

.page-number a {
  text-decoration: none;
  color: black;
}

/* Pagination 2 */
.pagination-2 .page-number {
  padding: 8px 16px;
  background-color: #f3f4f2;
}

.pagination-2 .page-number:hover {
  background-color: #d9dcd6;
}

.pagination-2 .active {
  border-radius: 4px;
  background-color: #16425b;
}

.pagination-2 .active:hover {
  background-color: #16425b;
}

.pagination-2 .active a {
  color: #f3f4f2;
}
</style>