// components/AddTaskModal.tsx
import { useState } from "react";
import { useTaskStore } from "../../store/useTaskStore";
import type { Priority } from "../../types/task";

interface Props {
  onClose: () => void;
}

export default function AddTaskModal({ onClose }: Props) {
  const addTask = useTaskStore((state) => state.addTask);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title.trim()) {
      addTask(title, priority, description);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Новая задача</h2>

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
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Отмена
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
}
