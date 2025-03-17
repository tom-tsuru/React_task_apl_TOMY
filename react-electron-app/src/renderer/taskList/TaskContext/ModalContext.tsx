import * as React from 'react';

// 型定義
interface ModalContextType {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  closeModal: boolean;
  setCloseModal: (closeModal: boolean) => void;
  openTodoModal: boolean;
  setOpenTodoModal: (openTodoModal: boolean) => void;
  closeTodoModal: boolean;
  setCloseTodoModal: (closeTodoModal: boolean) => void;
  openDoingModal: boolean;
  setOpenDoingModal: (openDoingModal: boolean) => void;
  closeDoingModal: boolean;
  setCloseDoingModal: (closeDoingModal: boolean) => void;
  openDoneModal: boolean;
  setOpenDoneModal: (openMopenDoneModalodal: boolean) => void;
  closeDoneModal: boolean;
  setCloseDoneModal: (closeDoneModal: boolean) => void;
}


// Context作成(初期値設定)
export const ModalContext = React.createContext<ModalContextType>({
  openModal: false,
  setOpenModal: () => {},
  closeModal: false,
  setCloseModal: () => {},
  openTodoModal: false,
  setOpenTodoModal: () => {},
  closeTodoModal: false,
  setCloseTodoModal: () => {},
  openDoingModal: false,
  setOpenDoingModal: () => {},
  closeDoingModal: false,
  setCloseDoingModal: () => {},
  openDoneModal: false,
  setOpenDoneModal: () => {},
  closeDoneModal: false,
  setCloseDoneModal: () => {},
})

export const ModalContextProvider = ({children}: {children: React.ReactNode}) => {
  const [openModal, setOpenModal]               = React.useState<boolean>(false);
  const [closeModal, setCloseModal]             = React.useState<boolean>(false);
  const [openTodoModal, setOpenTodoModal]       = React.useState<boolean>(false);
  const [closeTodoModal, setCloseTodoModal]     = React.useState<boolean>(false);
  const [openDoingModal, setOpenDoingModal]     = React.useState<boolean>(false);
  const [closeDoingModal, setCloseDoingModal]   = React.useState<boolean>(false);
  const [openDoneModal, setOpenDoneModal]       = React.useState<boolean>(false);
  const [closeDoneModal, setCloseDoneModal]     = React.useState<boolean>(false);
  return (
    <ModalContext.Provider value={{
      openModal, setOpenModal,
      closeModal, setCloseModal,
      openTodoModal, setOpenTodoModal,
      closeTodoModal, setCloseTodoModal,
      openDoingModal, setOpenDoingModal,
      closeDoingModal, setCloseDoingModal,
      openDoneModal, setOpenDoneModal,
      closeDoneModal, setCloseDoneModal,
    }}>
      {children}
    </ModalContext.Provider>
  );
};
