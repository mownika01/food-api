import "./App.css";
import Pages from "./pages/pages";
import Category from "./components/category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/search";
import {GiKnifeFork} from 'react-icons/gi';
import styled from "styled-components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to={'/'}>
      <Logo>
        <GiKnifeFork />
        <h4>Deliciouss</h4>
      </Logo>
      </Link>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 4rem;
  cursor: pointer;
  color: #313131;
  svg{
    font-size: 18px;
  }
`
export default App;
