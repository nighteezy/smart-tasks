import React from "react";
import type { Task } from "../../types/task";
import { useTaskItem } from "../../hooks/useTaskItem";

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { startEditing, deleted, toggle } = useTaskItem(task);

  return (
    <div className="task-item">
      <div>
        <input type="checkbox" checked={task.completed} onChange={toggle} />
        <div className="task-content">
          <h4>{task.title}</h4>
          {task.description && <p>{task.description}</p>}
          <small>Приоритет: {task.priority}</small>
        </div>
        <div className="task-actions">
          <button onClick={startEditing}>✏️ Редактировать</button>
          <button onClick={deleted}>🗑 Удалить</button>
        </div>
      </div>
    </div>
  );
};
