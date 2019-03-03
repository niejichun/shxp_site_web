<template>
  <div>
    <input type="text" @input="handleInput" :value="content">
    <slot name="head"></slot>
    <slot name="foot"></slot>
  </div>
</template>
<script>
export default {
  model: {
    prop: "content",
    event: "input"
  },
  props: ["content"],
  date: () => {},
  created: function() {
    console.log("created");
  },
  mounted() {},
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
<style>
</style>