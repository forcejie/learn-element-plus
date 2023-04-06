<template>
  <div class="home">
    <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-item>1</el-dropdown-item>
        <el-dropdown-item>2</el-dropdown-item>
        <el-dropdown-item>3</el-dropdown-item>
        <el-dropdown-item disabled>4</el-dropdown-item>
        <el-dropdown-item divided>5</el-dropdown-item>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup></script>

<style></style>
