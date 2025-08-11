import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Priority, Task } from "../types/task";
import { nanoid } from "nanoid";

interface TaskState {
  tasks: Task[];
  addTask: (title: string, priority: Priority, description?: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (
    id: string,
    updatedFields: Partial<Omit<Task, "id" | "createdAt">>
  ) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (title, priority, description?) =>
        set((state) => ({
          tasks: [
            {
              id: nanoid(),
              title,
              description,
              completed: false,
              priority,
              createdAt: Date.now(),
            },
            ...state.tasks,
          ],
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      updateTask: (id, updatedData) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updatedData } : task
          ),
        })),
    }),
    {
      name: "smart-tasks-storage",
    }
  )
);
