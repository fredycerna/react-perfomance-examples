import React from 'react';
import TaskItem from './TaskItem';
import './UseCallback.css';

const TaskList = ({ tasks, onDelete }) => {

    console.log("Renderizando TaskList");

    return (
        <div className="task-list-container">
            <h3 className="task-list-title">Lista de Tareas</h3>
            <ul className="task-list">
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
