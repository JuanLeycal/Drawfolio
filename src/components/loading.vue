<template>
  <div :class="{ loader: true, fadeOut: !isLoading }">
      <img src="../assets/gato.gif">
  </div>
</template>

<script>
export default {
  name: "loading",
  props: ["isLoading"]
};
</script>

<style scooped>
.loader {
  background: #000b3f ;
  bottom: 0;
  display: block;
  left: 0;
  overflow: hidden;
  padding-top: 10rem;
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
}

.fadeOut {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

</style>