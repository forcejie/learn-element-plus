<template>
  <div class="home">
    <el-card>
      <template #header>
        <div class="card">
          <span>name</span>
          <el-button class="button">button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "list item" + o }}
      </div>
    </el-card>
  </div>
</template>

<script setup></script>

<style>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
