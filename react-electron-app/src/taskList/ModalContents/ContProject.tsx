import React, { useState, useContext } from 'react';
// import './Contents.css';
import { TaskContext } from '../TaskList';

const ContProject = () => { 
    const { project, setProject } = useContext(TaskContext);
    return (
        <div> 
                <input 
                    type="text" 
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                />
        </div>
    )
}

export default ContProject;
