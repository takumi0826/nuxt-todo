<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"; // コンポーネント読み込み
export default {
  components: {
    Header // コンポーネントの登録
  }
};
</script>

<style lang="scss">
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
