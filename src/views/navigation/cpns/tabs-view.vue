<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="user" name="first">user</el-tab-pane>
      <el-tab-pane label="config" name="second">config</el-tab-pane>
      <el-tab-pane label="role" name="third">role</el-tab-pane>
      <el-tab-pane label="task" name="fourth">task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeName = ref("first");

const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>

<style></style>
