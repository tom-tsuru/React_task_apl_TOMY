import React, { useState, useContext } from 'react';
import './Contents.css';
import { TaskContext } from '../../TaskList';

const ContTaskName = () => { 
    const { title, setTitle } = useContext(TaskContext);
    return (
        <div> 
                <input 
                    className='content-task-name' 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
        </div>
    )
}

export default ContTaskName;
