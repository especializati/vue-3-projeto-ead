<template>
  <div class="left">
    <div class="card">
      <div class="title bg-laravel">
        <span class="text">Modulos</span>
        <span class="icon far fa-stream"></span>
      </div>
      <div class="modules">
        <div class="name">
          <span class="text">Modulo 1</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul class="classes">
          <li class="active">
            <span class="check active fas fa-check"></span>
            <span class="nameLesson">Aula 01</span>
          </li>
          <li>
            <span class="check active fas fa-check"></span>
            <span class="nameLesson">Aula 02</span>
            <span class="file fas fa-file-archive"></span>
          </li>
          <li>
            <span class="check fas fa-check"></span>
            <span class="nameLesson">Aula 03</span>
            <span class="file fas fa-file-archive"></span>
          </li>
        </ul>
      </div>
      <div class="modules">
        <div class="name">
          <span class="text">Modulo 2</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul class="classes">
          <li>
            <span class="check fas fa-check"></span>
            <span class="nameLesson">Aula 01</span>
          </li>
          <li>
            <span class="check active fas fa-check"></span>
            <span class="nameLesson">Aula 02</span>
            <span class="file fas fa-file-archive"></span>
          </li>
          <li>
            <span class="check fas fa-check"></span>
            <span class="nameLesson">Aula 03</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modules'
}
</script>