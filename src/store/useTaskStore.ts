import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Priority, Task } from "../types/task";
import { nanoid } from "nanoid";

interface TaskActions {
  addTask: (title: string, priority: Priority, description?: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (
    id: string,
    updatedFields: Partial<Omit<Task, "id" | "createdAt">>
  ) => void;
}

interface TaskState {
  tasks: Task[];
}

interface TaskStoreState extends TaskActions, TaskState {}

const TaskStore: StateCreator<TaskStoreState> = (set) => ({
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
});

export const useTaskStore = create<TaskStoreState>()(
  persist(TaskStore, {
    name: "task-storage",
    storage: createJSONStorage(() => localStorage),
  })
);

export const useTasks = () => useTaskStore((s) => s.tasks);
export const { addTask, deleteTask, updateTask, toggleTask } =
  useTaskStore.getState();
