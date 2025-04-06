import React,{useState} from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {

  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const handleSearch = (e) =>{
    e.preventDefault();
    navigate('/search/' + input)
  }

  return (
    <Form onSubmit={handleSearch}>
      <Wrapper>
        <FaSearch />
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      </Wrapper>
    </Form>
  );
};
const Form = styled.form`
  position: relative;
  margin: 0px 9rem;

  input{
    width: 100%;
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius:1.2rem;
    border:none;
    outline: none;
    padding:14px 40px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
 
 svg{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%,-50%);
    color: white;
    font-size: 15px;
 }
`;

export default Search;
