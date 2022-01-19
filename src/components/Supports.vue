<template>
  <div class="content">
    <div class="card">
      <div class="commentContent main">
        <span class="avatar">
          <img src="images/avatars/user01.svg" alt="" />
        </span>
        <span class="comment">
          <div class="balloon">
            <span class="fas fa-sort-down"></span>
            <span class="owner">Fernando - 07/10/2021</span>
            <span class="text">
              Donec ligula libero, sollicitudin vel libero vel, mollis porttitor
              turpis. Cras mattis turpis massa, sit amet fringilla diam auctor
              ac. Integer sit amet rutrum risus. In eleifend urna sapien,
              faucibus pharetra justo luctus quis. Vivamus eleifend fringilla
              massa
            </span>
          </div>
        </span>
        <button class="btn primary">Ver respostas</button>
      </div>
    </div>
    <div class="card">
      <div class="commentContent main">
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
        <button class="btn primary">Ocultar respostas</button>
      </div>
      <div class="answersContent">
        <div class="commentContent rightContent">
          <div class="comment">
            <div class="balloon">
              <span class="fas fa-sort-down"></span>
              <span class="owner">Carlos Ferreira - 07/10/2021</span>
              <span class="text">
                In eleifend urna sapien, faucibus pharetra justo luctus quis.
                Vivamus eleifend fringilla massa
              </span>
            </div>
          </div>
          <span class="avatar">
            <img src="images/avatars/user03.svg" alt="" />
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
    <div class="card">
      <div class="commentContent main">
        <span class="avatar">
          <img src="images/avatars/user02.svg" alt="" />
        </span>
        <span class="comment">
          <div class="balloon">
            <span class="fas fa-sort-down"></span>
            <span class="owner">João - 06/10/2021</span>
            <span class="text">
              Integer scelerisque placerat molestie. Vivamus dignissim bibendum
              sapien, non suscipit arcu lobortis nec. Donec eros est, mollis
              quis nibh quis, pellentesque suscipit libero.
            </span>
          </div>
        </span>
        <button class="btn primary">Ver respostas</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Supports",
};
</script>