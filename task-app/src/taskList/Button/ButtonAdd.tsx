import React from 'react';
import { useState } from 'react';
import './TaskButtons.css';
import TaskModal from '../TaskModal/TaskModal';

const ButtonAdd: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {/* モーダルウィンドウを開くボタン */}
            <button className='Task-button' onClick={() => setIsModalOpen(true)}>
                Add
            </button>
            {/* モーダルウィンドウ(タスク追加) */}
            <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    );
}


export default ButtonAdd;
