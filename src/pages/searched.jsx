import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  const params = useParams();
  
  const [searched, setSearched] = useState([]);

  const getRecipes = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=6c05a1d5f0a74c19955e7429f44e863e&query=${name}`
    );
    const data = await api.json();
    setSearched(data.results);
  };

  useEffect(() => {
    getRecipes(params.item);
  }, [params.item]);

  return (
    <List>
      {searched.map((item) => (
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  img {
    border-radius: 2rem;
    width: 100%;
    object-fit: cover;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
