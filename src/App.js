import React from "react";
import "./App.css";
import Map from "./components/map/Map";
import Add from "./components/Add";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Map />
      <Add />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
