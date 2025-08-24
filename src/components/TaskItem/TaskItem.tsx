import React from "react";
import type { Task } from "../../types/task";
import { deleteTask, toggleTask } from "../../store/useTaskStore";
import { openEditModal } from "../../store/useModalStore";

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="task-item">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <div className="task-content">
          <h4>{task.title}</h4>
          {task.description && <p>{task.description}</p>}
          <small>Приоритет: {task.priority}</small>
        </div>
        <div className="task-actions">
          <button onClick={() => openEditModal(task)}>✏️ Редактировать</button>
          <button onClick={() => deleteTask(task.id)}>🗑 Удалить</button>
        </div>
      </div>
    </div>
  );
};
