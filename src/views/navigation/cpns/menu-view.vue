<template>
  <div class="home">
    <el-row :span="12">
      <h5>white</h5>
      <el-menu default-active="2" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>navigator one</span>
          </template>
          <el-menu-item-group title="group one">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="group two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>navigator two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>navigator three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>navigator four</span>
        </el-menu-item>
      </el-menu>
    </el-row>
    <el-row :span="12">
      <h5>gray</h5>
    </el-row>
  </div>
</template>

<script setup></script>

<style></style>
