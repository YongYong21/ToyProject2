import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "../style/Modal.css";

const ModalExample = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(prev => !prev);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  // 메뉴 밖 클릭 시 메뉴 숨기기
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setModalIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <ModalWrap ref={menuRef}>
      <HamButton onClick={() => openModal()}>
        <img src="/src/assets/images/menu-ico.png" alt="메뉴" width="30" />
      </HamButton>
      {
        modalIsOpen && (
          <ButtonWrap>
            <button>대화상대 초대하기</button>
            <button>채팅방 나가기</button>
          </ButtonWrap>
        )
      }

    </ModalWrap>
  );
};

export default ModalExample;

const ModalWrap = styled.div`
  position: relative;
`;

const HamButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  background-color: red;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #E4E4E4;
  border-left: 1px solid #E4E4E4;
  border-right: 1px solid #E4E4E4;
  button{
    cursor: pointer;
    width: 190px;
    padding: 15px 10px;
    border: none;
    background-color: #fff;
    border-bottom: 1px solid #E4E4E4;
    color: #999696;
  }
`