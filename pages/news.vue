<template>
  <div>
    <div class="container">
      <div class="news">
        <h2 class="heading-2">Qiita 記事取得</h2>
        <div class="search">
          <input type="text" placeholder="文字を入力" class="search__input" v-model="keyword" />
          <span class="search__btn" @click="search">
            <fa-icon icon="search" size="1x" />検索
          </span>
        </div>
        <ul class="news__list">
          <li class="news__list-item" v-for="(getnews, key) in news" :key="key">
            <span class="news__likes">{{ getnews.likes_count }}いいね</span>
            <a :href="getnews.url" target="_blank" rel="noopener noreferrer">{{ getnews.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      news: null,
      keyword: "",
      message: ""
    };
  },
  methods: {
    getAnswer() {
      if (this.news === "") {
        this.news = null;
        return;
      }
      const vm = this;
      const params = { page: 1, per_page: 20, query: this.keyword };
      Axios.get("https://qiita.com/api/v2/items", { params })
        .then(response => {
          vm.news = response.data;
        })
        .catch(error => {
          vm.message = error;
        })
        .finally(() => {
          vm.message = "";
        });
    },
    search() {
      this.getAnswer();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variable";
@import "~/assets/css/_mixin";
.container {
  max-width: 600px;
  margin: auto;
}
.heading-2 {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
}
a {
  color: inherit;
  text-decoration: underline;
}
ul,
li {
  list-style: disc;
}
.news {
  &__list {
    margin-top: 40px;
  }
  &__list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-child(n + 2) {
      margin-top: 10px;
    }
    a {
      width: 80%;
      margin-left: 20px;
    }
  }
  &__likes {
    display: inline-block;
    width: 80px;
    text-align: center;
    padding: 3px 0;
    background-color: #55c500;
    color: #fff;
    border-radius: 5px;
    font-size: 1.2rem;
  }
}
.search {
  margin-top: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  &__input {
    padding: 10px 20px;
    font-size: 1.6rem;
    width: 100%;
    flex: 1;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
  }
  &__btn {
    display: inline-block;
    margin-left: 20px;
    color: #fff;
    background-color: #59bb0c;
    border-color: #4ea30a;
    text-align: center;
    padding: 6px 32px;
    border-radius: 5px;
  }
}
</style>
