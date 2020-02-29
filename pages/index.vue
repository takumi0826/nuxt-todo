<template>
  <div>
    <div class="link-area">
      <div class="btn-wrap">
        <nuxt-link to="/todo" class="btn">TODO</nuxt-link>
      </div>
      <div class="btn-wrap">
        <nuxt-link to="/news" class="btn">NEWS</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/css/_variable";
@import "~/assets/css/_mixin";
.link-area {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @include sp {
    flex-direction: column;
  }
}
.btn-wrap {
  width: calc(100% / 2 - 10px);
  @include sp {
    width: 100%;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }
}
.btn {
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  border: #006192 solid 1px;
  color: #006192;
  text-align: center;
  border-radius: 5px;
}
</style>