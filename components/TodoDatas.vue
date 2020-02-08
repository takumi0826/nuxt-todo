<template>
  <div></div>
</template>

<script>
import firebase from "firebase";
import TodoList from "@/components/TodoList";
export default {
  components: {
    TodoList
  },
  data() {
    return {
      db: null,
      todosData: null,
      text: "",
      lists: {}
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
      document.getElementById("addTask").focus();
    }
  }
};
</script>

<style lang="scss" scoped></style>
