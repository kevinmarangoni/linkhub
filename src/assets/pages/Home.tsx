import React, { useEffect, useState} from "react";
import styled from "styled-components";


const Home: React.FC = () => {

  return (
    <Container>
      <Content>

      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  height: 100vh;
  width: 100vw;
`;
const Content = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
