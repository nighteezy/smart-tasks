import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Priority, Task } from "../types/task";

interface TaskState {
  tasks: Task[];
  addTask: (title: string, priority: Priority) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const UseTaskStore = create<TaskState>()(
  persist((set) => ({
    tasks: [],
  }))
);
