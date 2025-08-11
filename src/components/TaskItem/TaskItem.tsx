import React, { useState } from "react";
import type { Priority, Task } from "../../types/task";
import { useTaskStore } from "../../store/useTaskStore";

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTask, deleteTask, updateTask } = useTaskStore();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [priority, setPriority] = useState(task.priority);

  const handleSave = () => {
    updateTask(task.id, { title, description, priority });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="task-item editing">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={priority}
          onChange={(
            e: React.ChangeEvent<HTMLSelectElement & { value: Priority }>
          ) => setPriority(e.target.value)}
        >
          <option value="low">Низкий</option>
          <option value="medium">Средний</option>
          <option value="high">Высокий</option>
        </select>
        <button onClick={handleSave}>💾 Сохранить</button>
        <button onClick={() => setIsEditing(false)}>❌ Отмена</button>
      </div>
    );
  }

  return (
    <div className="task-item">
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
        <button onClick={() => setIsEditing(true)}>✏️ Редактировать</button>
        <button onClick={() => deleteTask(task.id)}>🗑 Удалить</button>
      </div>
    </div>
  );
};
