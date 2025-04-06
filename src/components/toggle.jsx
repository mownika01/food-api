import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {

  const [click, setClick] = useState(1);

  return (
    <Container>
      <Wrapper>
          <AbsoluteDiv style={{left: click === 1 ? "0%" : "50%"}}></AbsoluteDiv>
          <Left onClick={()=>setClick(1)}>
            <h2 style={{color: click === 1 ? "white" : "black"}}>Branding</h2>
          </Left>
          <Right onClick={()=>setClick(2)}>
            <h2 style={{color: click === 2 ? "white" : "black"}}>Explore More</h2>
          </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
`;

const Wrapper = styled.div`
  width: 70%;
  position: relative;
  background-color:white;
  border-radius:40px;
  border:2px solid blue;
  display: flex;
  justify-content:space-between;

 
`;

const AbsoluteDiv = styled.div`
  position: absolute;
  width: 50%;
  top: 0;
  left: 0;
  background-color:blue;
  display: flex;
  border-radius: 1.5rem;
  padding: 12px;
  bottom: 0;
  transition: all 0.8s ease-in-out;
`;

const Left = styled.div`
  width: 100%;
  flex:1;
  padding: 12px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  border-radius: 1.5rem;
  position: relative;
  cursor: pointer;
  z-index: 3;
  margin-left:10px;
  h2{
      font-size: 16px;
  }
`;
const Right = styled.div`
  width: 100%;
  flex:1;
  padding: 12px;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  border-radius: 1.5rem;
  position: relative;
  cursor: pointer;
  z-index: 3;
  margin-right:10px;
  h2{
      font-size: 16px;
  }
`;

export default Toggle;
