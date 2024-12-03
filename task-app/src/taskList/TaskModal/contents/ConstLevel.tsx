import React, { useState, useContext } from 'react';
import './Contents.css';
import { TaskContext } from '../../TaskList';

const ContLevel = () => { 
    const { title, setTitle } = useContext(TaskContext);
    return (
        <div> 
                <input 
                    className='content-task-level' 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
        </div>
    )
}

export default ContLevel;
