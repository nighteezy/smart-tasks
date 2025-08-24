import { useTasks } from "../../store/useTaskStore";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList: React.FC = () => {
  const tasks = useTasks();
  console.log(tasks);
  if (tasks.length === 0) {
    return <p className="text-center text-2xl">Нет задач</p>;
  }
  return (
    <section className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskItem task={task} />
        ))}
      </ul>
    </section>
  );
};
