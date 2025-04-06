import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Cuisine = () => {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (name) => {
    const recipes = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=6c05a1d5f0a74c19955e7429f44e863e&cuisine=${name}`
    );
    const data = await recipes.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <List
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
    >
      {cuisine.map((item) => (
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

const List = styled(motion.div)`
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

export default Cuisine;
