import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});

  const [active, setActive] = useState("instructions");

  let params = useParams();

  const getRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.detail}/information?apiKey=6c05a1d5f0a74c19955e7429f44e863e`
    );
    const data = await api.json();
    setRecipe(data);
  };

  useEffect(() => {
    getRecipes();
  }, [params.detail]);

  return (
    <Wrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt="" />
      </div>
      <Info>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setActive("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => setActive("ingredients")}
        >
          Ingredients
        </Button>

        {active === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}
        {active === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 7rem;
  margin-bottom: 5rem;
  display: flex;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.3rem;
    text-align: center;
  }
`;
const Info = styled.div`
  width: 100%;
  margin-left: 10rem;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h3 {
    margin-top: 2rem;
  }

  ul{
    margin-top: 3rem;
  }
  li{
    margin-top:0.8rem;
  }
`;
const Button = styled.button`
  text-align: center;
  padding: 12px 24px;
  font-size: 16px;
  margin-right: 30px;
  border: 2px solid black;
  color: #313131;
  background-color: white;
  cursor: pointer;
`;

export default Recipe;
