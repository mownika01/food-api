import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin: 4rem 0%;
`;

const Slink = styled(NavLink)`
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  transform: scale(0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  h4 {
    color: white;
  }
  svg {
    color: white;
    font-size: 19px;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    h4 {
      color: white;
    }
    svg {
      color: white;
    }
  }
`;

const Category = () => {
  return (
    <List>
      <Slink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
};

export default Category;
