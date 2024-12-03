import React, { useState, useContext } from 'react';
import './Contents.css';
import { TaskContext } from '../../TaskList';

const ContTask = () => { 
    const { task, setTask } = useContext(TaskContext);
    return (
        <div> 
                <input 
                    className='content-task' 
                    type="text" 
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
        </div>
    )
}

export default ContTask;
