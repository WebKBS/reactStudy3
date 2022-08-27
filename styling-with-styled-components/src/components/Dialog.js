import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

// styled keyframes 유틸
const fadeIn = keyframes`
  from{
    opacity: 0;
  }

  to{
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from{
    transform: translateY(200px);
  }

  to{
    transform: translateY(0);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation: ${fadeIn} 0.25s ease-out forwards;
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  animation: ${slideUp} 0.25s ease-out forwards;
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

//컴포넌트를 전달해서 css 재설정하기
const ShortMarginButton = styled(Button)`
  & + & {
    margin-top: 0;
    margin-left: 0.5rem;
  }
`;

const Dialog = ({
  title,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  visible,
}) => {
  if (!visible) return null; // null로 처음에 보여지지 않는다.
  //Appjs 에서 visible true를 넘겨 받으면 보여진다.
  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {confirmText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {cancelText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
};

Dialog.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
};

export default Dialog;
