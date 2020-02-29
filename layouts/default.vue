<template>
  <div>
    <Header />
    <main>
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </main>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "~/assets/css/_variable";
@import "~/assets/css/_mixin";
main {
  padding: 100px 0;
  @include sp {
    padding: 40px 20px;
  }
}
.fade-move {
  transition: all 0.3s;
}
.fade-enter {
  opacity: 0;
  animation-name: slide-in;
}
.fade-enter-active {
  animation: slide-in 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
@keyframes slide-in {
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
