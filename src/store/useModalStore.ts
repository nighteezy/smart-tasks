import { create } from "zustand";
import type { Task } from "../types/task";

type ModalMode = "add" | "edit";

interface ModalState {
  isOpen: boolean;
  mode: ModalMode;
  task: Task | null;
  openAddModal: () => void;
  openEditModal: (task: Task) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  mode: "add",
  task: null,

  openAddModal: () =>
    set({
      isOpen: true,
      mode: "add",
      task: null,
    }),

  openEditModal: (task) =>
    set({
      isOpen: true,
      mode: "edit",
      task,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      task: null,
    }),
}));
