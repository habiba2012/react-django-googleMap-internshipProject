import React, { useState } from "react";
import styled from "styled-components";
import CloseSVG from "./icons/CloseSVG";
import Form from "./Form";

const Add = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <BackDrop>
          <Close onClick={() => setOpen(!open)}>
            <CloseSVG />
          </Close>
          <Form />
        </BackDrop>
      )}

      <Button onClick={() => setOpen(!open)}>Add</Button>
    </>
  );
};

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 30px;
  background-color: #152afc;
  color: white;
  transition: 200ms;
  text-decoration: none;
  position: absolute;
  bottom: 26px;
  right: 26px;
  z-index: 11;
  border: none;
  font-size: 16px;
  outline: none;

  :hover {
    background-color: #dadbfe;
    color: #666;
    cursor: pointer;
  }
`;
const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #dadbfee6;
  z-index: 12;
  display: flex;
  flex-direction: column;
`;
const Close = styled.button`
  margin: 5px;
  height: min-content;
  width: min-content;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #152afc;
  margin-left: auto;
`;

export default Add;
