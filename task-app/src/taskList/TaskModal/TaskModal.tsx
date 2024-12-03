import React, { useState } from 'react';
import './TaskModal.css';
import Contesnts from './contents/Contents';

// モーダルウィンドウのプロパティの型定義
interface ModalProps {
    isOpen: boolean;
    onClose: () => void; // モーダルを閉じるための関数
}

const TaskModal: React.FC<ModalProps> = (props) => { // propsは{ isOpen }でもOK。使用の際はisOpenとする

    if (props.isOpen) {
        return (
            <div className='modal-overlay'>
                <div className='modal-content' onClick={(e) => e.stopPropagation}> {/* クリックイベントが親要素に伝播しないようにする */}
                    <Contesnts />
                    <p><button className='modal-close' onClick={ props.onClose } >×</button></p>
                </div>
            </div>
        )
    } else {
        return null; // 何も表示しない
    }
}



export default TaskModal;
