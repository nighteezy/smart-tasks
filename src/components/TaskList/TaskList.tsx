import { useTaskStore } from "../../store/useTaskStore";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList: React.FC = () => {
  const { tasks } = useTaskStore();

  if (tasks.length === 0) {
    return <p className="text-center text-2xl">Нет задач</p>;
  }
  return (
    <section className="">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskItem task={task} />
        ))}
      </ul>
    </section>
  );
};
