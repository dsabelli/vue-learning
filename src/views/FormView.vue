<template>
  <div>
    <form @submit="handleSubmit">
      <label>Email:</label>
      <input type="email" required v-model="email" />
      <label>Password:</label>
      <input type="password" required v-model="password" />
      <label>Role:</label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>
      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keyup="addSkill" />
      <div
        class=""
        v-for="skill in skills"
        :key="skill"
        @click="deleteSkill(skill)"
      >
        {{ skill }}
      </div>
      <div class="terms">
        <label>Accept terms and conditions</label>
        <input type="checkbox" v-model="terms" required />
      </div>
      <button type="submit">Submit</button>
    </form>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
    <p>{{ role }}</p>
    <p>{{ terms }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      tempSkill: "",
      skills: [] as any,
    };
  },
  methods: {
    addSkill(e: KeyboardEvent) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill.split(",")[0]);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(id: string) {
      this.skills = this.skills.filter((skill: string) => skill !== id);
    },
    handleSubmit(e: Event) {
      e.preventDefault();
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
