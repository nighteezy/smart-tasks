import { openAddModal } from "../../store/useModalStore";

export const Header: React.FC = () => {
  return (
    <>
      <header className="bg-white shadow p-4 top-0 z-10">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">SMART TASKS</h1>
          <button
            onClick={() => openAddModal()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            + Добавить задачу
          </button>
        </div>
      </header>
    </>
  );
};
