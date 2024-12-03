import React from 'react';
import './TaskButtons.css';
import ButtonAdd from "./ButtonAdd";
import ButtonDelete from "./ButtonDelete";

//CSSのTaskList-header内に文字を表示したい

function TaskButtons() {
    return (
        <div className='Task-buttons'>
                <ButtonAdd />
                <ButtonDelete />
        </div>
    );
}

export default TaskButtons;
