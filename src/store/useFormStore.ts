import { create, type StateCreator } from "zustand";
import type { Priority, Task } from "../types/task";
import { createJSONStorage, persist } from "zustand/middleware";
import { addTask, updateTask } from "./useTaskStore";
import { closeModal } from "./useModalStore";

interface FormActions {
  setField: (field: keyof FormState, value: string | Priority) => void;
  resetForm: () => void;
  submit: () => void;
  loadTask: (task: Task, mode: "add" | "edit") => void;
}

interface IInitialStore {
  mode: "add" | "edit";
  taskId: string | null;

  title: string;
  priority: Priority;
  description: string;
}

const initialState: IInitialStore = {
  mode: "add",
  taskId: null,
  title: "",
  priority: "medium",
  description: "",
};

interface FormState extends FormActions, IInitialStore {}

const FormStore: StateCreator<FormState> = (set, get) => ({
  ...initialState,
  setField: (field, value) => set({ [field]: value } as Partial<FormState>),
  loadTask: (task, mode) =>
    set({
      mode,
      taskId: task?.id ?? null,
      title: task?.title ?? "",
      priority: task?.priority ?? "medium",
      description: task?.description ?? "",
    }),
  resetForm: () => set(initialState),
  submit: () => {
    const { mode, taskId, title, priority, description } = get();

    if (mode === "add") {
      addTask(title, priority, description);
    } else if (mode === "edit" && taskId) {
      updateTask(taskId, { title, priority, description });
    }

    closeModal();
    get().resetForm();
  },
});

export const useFormStore = create<FormState>()(
  persist(FormStore, {
    name: "task-storage",
    storage: createJSONStorage(() => localStorage),
  })
);

export const loadedTask = useFormStore.getState().loadTask;
export const handleSubmit = useFormStore.getState().submit;
export const resetForm = useFormStore.getState().resetForm;
