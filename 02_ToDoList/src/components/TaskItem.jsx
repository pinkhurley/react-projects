import React, { useState } from "react";
import styles from "./TaskItem.module.css";
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          checked={isChecked}
          className={styles.checkbox}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={25} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
