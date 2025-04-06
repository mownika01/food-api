import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  //   invoke the function 

  useEffect(() => {
    getPopular();
  }, []);

  //   fetch recipe from api
  //   function is created   

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=6c05a1d5f0a74c19955e7429f44e863e&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Trending Picks</h3>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
            perPage: 4,
          }}
        >
          {popular.map((recipes) => (
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
  min-height: 20rem;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    border-radius: 32px;
    height: 150px;
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
    bottom: 50%;
    transform: translate(-50%, -0%);
  }
`;

const Gradient = styled.div`
  width: 100%;
  min-height: 51.6%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  position: absolute;
  left: 50%;
  z-index: 1;
  top: 5%;
  transform: translate(-50%, -0%);
  border-radius: 32px;
  cursor: pointer;
`;

export default Popular;
