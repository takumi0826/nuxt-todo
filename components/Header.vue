<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__title">
        <nuxt-link to="/">Nuxt Portfolio</nuxt-link>
      </h1>
      <nav class="gnav" :class="{ open: isMenuActive }">
        <ul class="gnav__list">
          <li class="gnav__list-item">
            <nuxt-link to="/todo">TODO</nuxt-link>
          </li>
          <li class="gnav__list-item">
            <nuxt-link to="/news">NEWS</nuxt-link>
          </li>
        </ul>
        <div class="burger" @click="toggle" :class="{ open: isMenuActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isMenuActive: false
    };
  },
  methods: {
    toggle() {
      this.isMenuActive = !this.isMenuActive;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variable";
@import "~/assets/css/_mixin";
.header {
  background-color: #006192;
  &__inner {
    max-width: 1000px;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-size: 2rem;
    color: #fff;
  }
  .gnav {
    &.open {
      .gnav__list {
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(#006192, 0.9);
        padding: 82px 20px 40px;
        z-index: 100;
      }
      .gnav__list-item {
        text-align: center;
        font-size: 2rem;
        margin: 0;
        padding: 20px 0;
        font-weight: bold;
      }
    }
    &__list {
      display: flex;
      @include sp {
        display: none;
      }
    }
    &__list-item {
      color: #fff;
      &:nth-child(n + 2) {
        margin-left: 20px;
      }
    }
    .burger {
      display: none;
      @include sp {
        display: block;
        width: 50px;
        height: 50px;
        position: relative;
        z-index: 100;
        &.open {
          span {
            &:nth-child(1) {
              top: 50%;
              transform: translate(-50%, -50%) rotate(45deg);
            }
            &:nth-child(2) {
              opacity: 0;
            }
            &:nth-child(3) {
              top: 50%;
              transform: translate(-50%, -50%) rotate(135deg);
            }
          }
        }
        span {
          position: absolute;
          width: 70%;
          height: 3px;
          background-color: #fff;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s;
          &:nth-child(1) {
            top: 30%;
          }
          &:nth-child(2) {
            top: 50%;
          }
          &:nth-child(3) {
            top: 70%;
          }
        }
      }
    }
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>
