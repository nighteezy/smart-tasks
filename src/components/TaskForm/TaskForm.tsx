import { useState } from "react";
import type { Priority } from "../../types/task";
import {
  useModalMode,
  useModalTask,
  closeModal,
} from "../../store/useModalStore";
import { addedTask, updatedTask } from "../../store/useTaskStore";

export const TaskForm = () => {
  const mode = useModalMode();
  const task = useModalTask();

  const [title, setTitle] = useState(task?.title ?? "");
  const [priority, setPriority] = useState<Priority>(
    task?.priority ?? "medium"
  );
  const [description, setDescription] = useState(task?.description ?? "");

  const handleSubmit = () => {
    if (mode === "add") {
      addedTask(title, priority, description);
    } else if (mode === "edit" && task) {
      updatedTask(task.id, { title, priority, description });
    }
    closeModal();
  };

  return (
    <>
      <input
        type="text"
        placeholder="Название"
        className="w-full border rounded-lg px-3 py-2 mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        className="w-full border rounded-lg px-3 py-2 mb-3"
      >
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>

      <textarea
        placeholder="Описание"
        className="w-full border rounded-lg px-3 py-2 mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex justify-end gap-2">
        <button
          onClick={closeModal}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          Отмена
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          {mode === "add" ? "Добавить" : "Сохранить"}
        </button>
      </div>
    </>
  );
};
