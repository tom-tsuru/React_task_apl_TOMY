import React, { useState, useContext } from 'react';
import './Contents.css';
import { TaskContext } from '../../TaskList';

const ContProject = () => { 
    const { title, setTitle } = useContext(TaskContext);
    return (
        <div> 
                <input 
                    className='content-task-project' 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
        </div>
    )
}

export default ContProject;
