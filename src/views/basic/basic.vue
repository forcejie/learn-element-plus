<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <div>
      <h2>button</h2>
      <button-view></button-view>
      <menu-view></menu-view>
      <layout-view></layout-view>
    </div>
  </div>
</template>

<script setup>
import ButtonView from "./cpns/button-view.vue";
import MenuView from "./cpns/menu-view.vue";
import LayoutView from "./cpns/layout-view.vue";
</script>

<style></style>
