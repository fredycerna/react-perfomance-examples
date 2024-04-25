import React from 'react';

const TaskItem = React.memo(({ task, onDelete }) => {
    const handleDelete = () => {
        onDelete(task.id);
    };

    console.log("Renderizando TaskItem - Tarea: ", task.id);

    return (
        <li>
            <span>{task.title}</span>
            <button onClick={handleDelete}>Eliminar</button>
        </li>
    );
});

export default TaskItem;
