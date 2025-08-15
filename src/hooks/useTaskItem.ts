import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import type { Priority, Task } from "../types/task";

export function useTaskItem(task: Task) {
  const { toggleTask, deleteTask, updateTask } = useTaskStore();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [priority, setPriority] = useState<Priority>(task.priority);

  const startEditing = () => setIsEditing(true);
  const canсelEditing = () => {
    setTitle(task.title);
    setDescription(task.description || "");
    setPriority(task.priority);
    setIsEditing(false);
  };

  const toggle = () => {
    toggleTask(task.id);
  };
  const deleted = () => {
    deleteTask(task.id);
  };
  const save = () => {
    updateTask(task.id, { title, description, priority });
    setIsEditing(false);
  };

  return {
    startEditing,
    canсelEditing,
    save,
    deleted,
    toggle,
    isEditing,
    title,
    priority,
    description,
    setTitle,
    setDescription,
    setPriority,
  };
}
