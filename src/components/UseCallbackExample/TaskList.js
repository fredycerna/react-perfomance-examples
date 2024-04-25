import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {

    console.log("Renderizando TaskList");

    return (
        <div>
            <h3>Lista de Tareas</h3>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
