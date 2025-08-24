import {
  closeModal,
  useIsModalOpen,
  useModalMode,
} from "../../store/useModalStore";
import {
  handleSubmit,
  resetForm,
  useFormStore,
} from "../../store/useFormStore";

export default function TaskModal() {
  const isOpen = useIsModalOpen();
  const mode = useModalMode();

  const { title, priority, description, setField } = useFormStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {mode === "add" ? "Новая задача" : "Редактировать задачу"}
        </h2>

        <input
          type="text"
          placeholder="Название"
          className="w-full border rounded-lg px-3 py-2 mb-3"
          value={title}
          onChange={(e) => setField("title", e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setField("priority", e.target.value)}
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
          onChange={(e) => setField("description", e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              resetForm();
              closeModal();
            }}
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
      </div>
    </div>
  );
}
