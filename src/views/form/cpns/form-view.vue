<template>
  <div class="home">
    <el-form :model="form" label-width="120px">
      <el-form-item label="输入框">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="zone">
        <el-select v-model="form.region" placeholder="select your zone">
          <el-option label="zone one" value="one"></el-option>
          <el-option label="zone two" value="two"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="time">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="date"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span>-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            placeholder="time2"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="switch">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const onSubmit = () => {
  console.log("submit");
};
</script>

<style></style>
