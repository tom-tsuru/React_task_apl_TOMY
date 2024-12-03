import React, { createContext } from 'react';
import { useState, useContext } from 'react';
import './TaskList.css';
import TaskButtons from "./Button/TaskButtons";

interface TaskContextType {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
}

export const TaskContext = createContext<TaskContextType>({
    title   : "",
    setTitle: () => {},
    task    : "",
    setTask : () => {}
});

const TaskList = () => {
    const [title, setTitle] = useState("タスク名を記入");
    const [task, setTask] = useState("タスク内容を記入");
    return (
        <div className='Task-apl'>
            <div className='Plan'>
                <div className='outlook-Plan'>
                    <h2>Outlook予定</h2>
                </div>
                <div className='wait-Plan'>
                    <h2>Wait予定</h2>   
                </div>
                <div className='my-Plan'>
                    <h2>私用予定</h2>
                </div>
            </div>
            <TaskContext.Provider value={{ title, setTitle, task, setTask }}>
            <div className='Task'>
                <TaskButtons />
                <div className='Task-todo'>
                    <h2>ToDo</h2>
                </div>
                <div className='Task-doing'>
                    <h2>Doing</h2>   
                </div>
                <div className='Task-done'>
                    <h2>Done</h2>
                </div>
            </div>
            </TaskContext.Provider>
        </div>
        
    );
}

export default TaskList;
