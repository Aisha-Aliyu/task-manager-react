import React from "react";

function Task({ task, toggleComplete, deleteTask, provided, snapshot, isOverdue }) {
  return (
    <div
      className={`task ${snapshot.isDragging ? "dragging" : ""} ${task.completed ? "completed" : ""} ${isOverdue ? "overdue" : ""}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="task-info">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span>{task.text}</span>
        {task.dueDate && <span className="due-date">{task.dueDate}</span>}
        <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
      </div>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>✕</button>
    </div>
  );
}

export default Task;