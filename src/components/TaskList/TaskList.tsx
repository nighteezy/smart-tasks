import { UseTaskStore } from "../../store/useTaskStore";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList: React.FC = () => {
  const tasks = UseTaskStore((state) => state.tasks);
  //const addTask = UseTaskStore((state) => state.addTask)
  const toggleTask = UseTaskStore((state) => state.toggleTask);
  const deleteTask = UseTaskStore((state) => state.deleteTask);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            task={task}
            onToggleComplete={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
