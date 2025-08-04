import React from "react";
import type { Task } from "../../types/task";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <input type="checkbox" onClick={() => onToggleComplete} />
      <button onClick={() => onDelete}>Удалить</button>
    </div>
  );
};
