export const TaskForm = () => {
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
    </>
  );
};
