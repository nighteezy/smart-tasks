import { useState } from "react";
import { TaskList } from "./components/TaskList/TaskList";
import AddTaskModal from "./components/AddTaskModal/AddTaskModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="bg-white shadow p-4 flex items-center justify-between top-0 z-10">
          <h1 className="text-2xl font-bold text-gray-800">SMART TASKS</h1>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            + Добавить задачу
          </button>
        </header>

        <main className="p-4">
          <TaskList />
        </main>

        {isOpen && <AddTaskModal onClose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
}

export default App;
