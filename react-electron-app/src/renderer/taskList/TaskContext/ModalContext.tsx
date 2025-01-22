import * as React from 'react';

// 型定義
interface TaskContextType {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  closeModal: boolean;
  setCloseModal: (closeModal: boolean) => void;
}


// Context作成(初期値設定)
export const ModalContext = React.createContext<TaskContextType>({
  openModal: false,
  setOpenModal: () => {},
  closeModal: false,
  setCloseModal: () => {}
})

export const ModalContextProvider = ({children}: {children: React.ReactNode}) => {
  const [openModal, setOpenModal]       = React.useState<boolean>(false);
  const [closeModal, setCloseModal]     = React.useState<boolean>(false);
  return (
    <ModalContext.Provider value={{
      openModal, setOpenModal,
      closeModal, setCloseModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};
