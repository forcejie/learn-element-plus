<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <card-view></card-view>
    <PaginationView></PaginationView>
    <TableView></TableView>
  </div>
</template>

<script setup>
import CardView from "./cpns/card-view.vue";
import PaginationView from "./cpns/pagination-view.vue";
import TableView from "./cpns/table-view.vue";
</script>

<style></style>
