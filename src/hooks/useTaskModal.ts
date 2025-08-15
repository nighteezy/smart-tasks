import { useModalStore } from "../store/useModalStore";
import { useTaskStore } from "../store/useTaskStore";
import type { Task } from "../types/task";

export function useTaskModal() {
  const { isOpen, mode, task, closeModal } = useModalStore();
  const { addTask, updateTask } = useTaskStore();

  const handleSubmit = (data: Task) => {
    if (mode === "add") {
      addTask(data.title, data.priority, data.description);
    }
    if (mode === "edit" && task) {
      updateTask(task.id, {
        title: data.title,
        priority: data.priority,
        description: data.description,
      });
    }
    closeModal();
  };

  return {
    handleSubmit,
    isOpen,
    closeModal,
    task,
    mode,
  };
}
