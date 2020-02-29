<template>
  <div>
    <div class="container">
      <div class="todo">
        <div class="todo__input">
          <input
            id="addTask"
            type="text"
            placeholder="タスクを追加"
            v-model.trim="text"
            @keyup.enter="add"
          />
        </div>
        <div class="add-btn-wrap">
          <button class="add-btn" @click="add">追加する</button>
        </div>
        <ul class="todo__list">
          <li
            class="todo__list-item"
            v-for="(list, key) in lists"
            :key="key"
            :class="{ active: list.check }"
          >
            <div class="todo__list-text" @click="upDate(list, key)">{{ list.name }}</div>
            <span class="delete-btn" @click="remove(list, key)">
              <fa-icon icon="trash-alt" size="1x" class="icon-trash" />
            </span>
          </li>
        </ul>
        <div class="focus-btn" @click="focus">
          <fa-icon icon="plus-circle" size="3x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      db: null,
      todosData: null,
      text: "",
      lists: {},
      enable: false
    };
  },
  created() {
    this.db = firebase.firestore();
    this.todosData = this.db.collection("todos");
    this.todosData.onSnapshot(querySnapshot => {
      const obj = {};
      querySnapshot.forEach(doc => {
        obj[doc.id] = doc.data();
      });
      this.lists = obj;
    });
  },
  methods: {
    add() {
      if (this.text === "") {
        return;
      }
      this.todosData.add({
        name: this.text,
        check: false
      });
      this.text = "";
    },
    upDate(list, key) {
      list.check = !list.check;
      this.todosData.doc(key).update(list);
    },
    remove(list, key) {
      if (list.check === true) {
        this.todosData.doc(key).delete();
      }
    },
    focus() {
      document.querySelector("#addTask").focus();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_variable";
@import "~/assets/css/_mixin";

.fade-enter-active {
  opacity: 0;
}
.fade-enter-to {
  opacity: 0;
}
.fade-enter-active {
  opacity: 0;
}
.icon-trash {
  color: #888;
  transition: all 0.3s;
}
.container {
  max-width: 600px;
  margin: auto;
}
.todo {
  padding: 40px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 3px #ddd;
  position: relative;
  &__input {
    input {
      width: 100%;
      padding: 15px 20px;
      font-size: 1.2rem;
      border-radius: 5px;
      border: 1px solid #ddd;
      outline: none;
      transition: all 0.3s;
      &:focus {
        font-size: 1.6rem;
      }
    }
  }
  &__list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #ddd;
    word-break: break-word;
    transition: all 0.3s;
    @include sp {
      padding: 0 10px;
    }
    &.active {
      .todo__list-text {
        text-decoration: line-through;
      }
      .delete-btn {
        background-color: #006192;
      }
      .icon-trash {
        color: #fff;
      }
    }
  }
  &__list-text {
    font-size: 1.8rem;
    width: 100%;
    padding: 20px 0;
  }
}

.focus-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #fff;
  color: #189200;
  transform: translate(50%, 50%);
}
.add-btn-wrap {
  text-align: right;
  margin-top: 10px;
  margin-bottom: 10px;
  .add-btn {
    display: inline-block;
    background-color: #006192;
    color: #fff;
    text-align: center;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
}
.delete-btn {
  background-color: #eee;
  width: 50px;
  height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition: all 0.3s;
}
</style>
