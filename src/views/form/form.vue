<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="home">
    <auto-complete></auto-complete>
    <form-view></form-view>
    <input-view></input-view>
  </div>
</template>

<script setup>
import AutoComplete from "./cpns/auto-complete.vue";
import FormView from "./cpns/form-view.vue";
import inputView from "./cpns/input-view.vue";
</script>

<style></style>
