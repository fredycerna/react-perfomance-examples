import React, { useState } from 'react';
import TaskList from './TaskList';

const UseCallbackExampleInitial = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Tarea 1' },
        { id: 2, title: 'Tarea 2' },
        { id: 3, title: 'Tarea 3' }
    ]);

    const handleDelete = (taskId) => {
         console.warn("Manejador de eliminación ejecutado");
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <h2>Lista de Tareas - Ejemplo Inicial</h2>
            <TaskList tasks={tasks} onDelete={handleDelete} />
        </div>
    );
};

export default UseCallbackExampleInitial;
