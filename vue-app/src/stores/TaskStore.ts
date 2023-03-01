import { defineStore } from "pinia";

export interface Task {
  id: number;
  title: string;
  isFav: boolean;
}

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [] as any[],
    isLoading: false,
  }),
  getters: {
    favs(): Task[] {
      return this.tasks.filter((task) => task.isFav);
    },
    favCount(): number {
      return this.tasks.reduce((p, c) => (c.isFav ? p + 1 : p), 0);
    },
    totalCount: (state): number => state.tasks.length,
  },
  actions: {
    async getTasks() {
      this.isLoading = true;
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();
      this.tasks = data;
      this.isLoading = false;
    },
    async addTask(task: Task): Promise<void> {
      this.tasks.push(task);

      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        console.log(res.statusText);
      }
    },
    async deleteTask(id: number): Promise<void> {
      this.tasks = this.tasks.filter((task) => task.id !== id);

      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE",
      });
      if (!res.ok) {
        console.log(res.statusText);
      }
    },
    async toggleFav(id: number): Promise<void> {
      const task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        console.log(res.statusText);
      }
    },
  },
});
