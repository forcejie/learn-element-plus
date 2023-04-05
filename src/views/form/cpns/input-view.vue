<template>
  <!-- 绑定v-model 更新组件的绑定值 -->
  <!-- clearable属性可以得到一个可以一键清空的输入框 -->
  <div class="home">
    <el-input v-model="input" clearable placeholder="input"></el-input>
    <el-input
      v-model="input"
      type="password"
      placeholder="password"
      show-password
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const input = ref("");
</script>

<style></style>
