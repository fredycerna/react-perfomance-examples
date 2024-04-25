import React, { useState } from 'react';
import TaskList from './TaskList';
import './../../App.css';

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
        <div className="example-container">
            <h2 className="example-title">useCallback - Ejemplo Inicial</h2>
            <TaskList tasks={tasks} onDelete={handleDelete} />
        </div>
    );
};

export default UseCallbackExampleInitial;
