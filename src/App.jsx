import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Pet from "./components/Pet";
import Greeting from "./components/Greeting";
import FullName from "./components/FullName";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import Callout from "./components/Callout";
import {Movie, MoviesList} from "./components/MoviesList";
import CatsList from "./components/BigCats";
import MoodChanger from "./components/MoodChanger";
import Emoji from "./components/Emoji";
import BirthdayTranslator from "./components/BirthdayTranslator"
import BigCats from "./components/Lab4";
import BigCats1 from "./components/Lab5";
import Weather from "./components/Weather";
import Calculator from "./components/Calculator";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar";
import AppRoutes from "./Routes.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from './components/MUI/Theme';
<ThemeProvider theme={tealTheme}>{/* App.jsx components */}</ThemeProvider>
const divStyle = {
  background: "lightblue",
  padding: "1em",
  fontWeight: "bold",
};
function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}
function Welcome(props) {
  // custom Welcome component
  return (
    <div className="Welcome componentBox">
      <h3 style={{ color: "blue", textTransform: "uppercase" }}>Welcome!</h3>
      <div style={divStyle}>This is a styled div.</div>
      {/* if the 'name' prop exists, render it on the screen */}
      <h3>Welcome {props.name}!</h3>
      {/* if this component has children, render them here */}
      {props.children}
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);
  const invalidJSX = (
    <>
      <p>paragraph 1</p>
      <p>paragraph 2</p>
    </>
  );
  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };
  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );
  const spideyJSXFragment = (
    <>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <ThemeProvider theme={tealTheme}>{<AppRoutes></AppRoutes>}</ThemeProvider>
      
    </BrowserRouter>
    </>
  );
}

export default App;
