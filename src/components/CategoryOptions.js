import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CheckSVG from "./icons/CheckSVG";
import { COLOR } from "../constants";

const CategoryOptions = () => {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);
  const [options, setOptions] = useState([]);
  const ref = useRef();

  const handleOptions = () => {
    const option = ref.current.innerHTML;
    if (!options.includes(option)) {
      setOptions((oldArray) => [...oldArray, option]);
      setChecked(true);
    } else {
      setOptions(options.filter((category) => category !== option));
      setChecked(false);
    }
  };

  return (
    <Container open={open}>
      <Wrapper onClick={() => setOpen(!open)}>+ categories</Wrapper>
      <OptionsWrapper>
        <CheckboxWrapper onClick={() => handleOptions()}>
          <Checkbox checked={checked}>{checked && <CheckSVG />}</Checkbox>
          <Label ref={ref}>women</Label>
        </CheckboxWrapper>
      </OptionsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: ${(props) => (props.open ? "100px" : "54px;")};
  transition: 200ms;
`;
const Wrapper = styled.div`
  background: ${(props) => (props.option ? "#fff" : COLOR.BLUE)};
  font-size: 20px;
  border-radius: 25px;
  margin: 8px;
  color: ${(props) => (props.option ? COLOR.BLUE : "#fff")};
  border: 2px solid;
  border-color: ${(props) => (props.option ? "#fff" : COLOR.BLUE)};
  width: 250px;
  font-weight: 300;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;
const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 12px;
  user-select: none;
`;
const Checkbox = styled.div`
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? COLOR.PURPLE : "#fff")};
  border: 3px solid ${COLOR.BLUE};
  color: #152afc;
  border-radius: 4px;
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Label = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  margin: 0px;
`;

export default CategoryOptions;
