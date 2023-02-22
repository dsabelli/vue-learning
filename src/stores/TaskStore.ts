import { defineStore } from "pinia";

export interface Task {
  id: number;
  title: string;
  isFav: boolean;
}

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy milk", isFav: false },
      { id: 2, title: "play Mork Borg", isFav: true },
    ],
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
    addTask(task: Task): void {
      this.tasks.push(task);
    },
    deleteTask(id: number): void {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleFav(id: number): void {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, isFav: !task.isFav } : task
      );
    },
  },
});
