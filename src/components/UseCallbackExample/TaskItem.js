import React from 'react';
import './UseCallback.css';

const TaskItem = ({ task, onDelete }) => {
    const handleDelete = () => {
        onDelete(task.id);
    };

    console.log("Renderizando TaskItem - Tarea: ", task.id);

    return (
        <li className="task-item">
            <span>{task.title}</span>
            <button className="delete-button" onClick={handleDelete}>Eliminar</button>
        </li>
    );
};

export default TaskItem;
