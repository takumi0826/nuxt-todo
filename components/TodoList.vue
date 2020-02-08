<template>
  <div>
    <li class="todo__list-item">
      <div class="todo__list-text" @click="upDate(list, key)">{{ list.name }}</div>
      <span class="delete-btn" @click="remove(list, key)">
        <fa-icon icon="trash-alt" size="1x" class="icon-trash" />
      </span>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Object
    }
  },
  methods: {
    upDate(list, key) {
      this.$emit("update");
    },
    remove(list, key) {
      this.$emit("remove");
    }
  }
};
</script>
