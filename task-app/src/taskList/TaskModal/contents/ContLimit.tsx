import React, { useState, useContext } from 'react';
import './Contents.css';
import { TaskContext } from '../../TaskList';

const ContLimit = () => { 
    const { title, setTitle } = useContext(TaskContext);
    return (
        <div> 
                <input 
                    className='content-task-limit' 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
        </div>
    )
}

export default ContLimit;
