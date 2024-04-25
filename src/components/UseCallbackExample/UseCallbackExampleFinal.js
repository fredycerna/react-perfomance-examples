import React, { useState, useCallback } from 'react';
import TaskList from './TaskList';

const UseCallbackExampleFinal = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Tarea 1' },
        { id: 2, title: 'Tarea 2' },
        { id: 3, title: 'Tarea 3' }
    ]);

    const handleDelete = useCallback((taskId) => {
        setTasks(tasks => tasks.filter(task => task.id !== taskId));
    }, []);

    return (
        <div>
            <h2>Lista de Tareas - Ejemplo Final</h2>
            <TaskList tasks={tasks} onDelete={handleDelete} />
        </div>
    );
};

export default UseCallbackExampleFinal;
