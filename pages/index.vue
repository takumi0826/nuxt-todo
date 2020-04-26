<template>
  <div>
    <div class="login-area">
      <nuxt-link to @click.native="login" class="btn">ログイン</nuxt-link>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setUser(user);
        this.$router.push("todo");
      } else {
        this.deleteUser();
        this.$router.push("/");
      }
    });
  },
  methods: {
    ...mapActions(["setUser", "deleteUser", "login"])
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variable";
@import "~/assets/css/_mixin";
.login-area {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
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
  width: 260px;
  line-height: 50px;
  border-radius: 25px;
  border: #006192 solid 1px;
  color: #006192;
  text-align: center;
  border-radius: 5px;
}
</style>