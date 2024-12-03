import React from 'react';
import ContTaskName from './ContTaskName';
import ContProject from './ContProject';
import ContLimit from './ContLimit';
import ContLevel from './ConstLevel';
import ContTask from './ContTask';
import './Contents.css';


const Contents = () => {
    return (
        <div className='content'>
                <ContTaskName />
                <ContProject />
                <div className='content-task-limit-level'>
                    <ContLimit />
                    <ContLevel/>
                </div>
                <ContTask />
        </div>
    )
}

export default Contents;
