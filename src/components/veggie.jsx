import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  //   invoke the function

  useEffect(() => {
    getveggie();
  }, []);

  //   fetch recipe from api
  //   function is created

  const getveggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=6c05a1d5f0a74c19955e7429f44e863e&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian picks</h3>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
            perPage: 3,
          }}
        >
          {veggie.map((recipes) => (
            <SplideSlide key={recipes.id}>
              <Card key={recipes.id}>
                <Link to={"/recipe/" + recipes.id}>
                  <p>{recipes.title}</p>
                  <img src={recipes.image} />
                </Link>
              </Card>
              <Gradient />
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  color: black;
`;
const Card = styled.div`
  min-height: 25rem;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  img {
    border-radius: 32px;
    height: 300px;
    width: 100%;
    left: 0;
    position: absolute;
    object-fit: cover;
    margin-top: 30px;
  }

  p {
    width: 100%;
    font-size: 16px;
    text-align: center;
    position: absolute;
    z-index: 10;
    color: white;
    font-weight: 500;
    left: 50%;
    bottom: 30%;
    transform: translate(-50%, 0%);
  }
`;
const Gradient = styled.div`
  width: 100%;
  min-height: 77.5%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  position: absolute;
  left: 50%;
  z-index: 1;
  top: 5%;
  transform: translate(-50%, -0%);
  border-radius: 32px;
`;

export default Veggie;
