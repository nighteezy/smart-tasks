import { useModalMode } from "../../store/useModalStore";
import { TaskForm } from "../TaskForm/TaskForm";

export default function TaskModal() {
  const mode = useModalMode();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {mode === "add" ? "Новая задача" : "Редактировать задачу"}
        </h2>
        <TaskForm />
      </div>
    </div>
  );
}
