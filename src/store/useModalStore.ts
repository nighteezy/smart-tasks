import { create } from "zustand";
import type { Task } from "../types/task";

type ModalMode = "add" | "edit";

interface ModalActions {
  openAddModal: () => void;
  openEditModal: (task: Task) => void;
  closeModal: () => void;
}

interface IInitialStore {
  isOpen: boolean;
  mode: ModalMode;
  task: Task | null;
}

const initialState: IInitialStore = {
  isOpen: false,
  mode: "add",
  task: null,
};

interface ModalState extends ModalActions, IInitialStore {}

export const useModalStore = create<ModalState>((set) => ({
  ...initialState,
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

export const useIsModalOpen = () => useModalStore((s) => s.isOpen);
export const useModalMode = () => useModalStore((s) => s.mode);
export const useModalTask = () => useModalStore((s) => s.task);

export const openAddModal = () => useModalStore.getState().openAddModal();
export const openEditModal = (task: Task) =>
  useModalStore.getState().openEditModal(task);
export const closeModal = () => useModalStore.getState().closeModal();
