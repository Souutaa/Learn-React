import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumFeatures from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";
import NotFound from "./components/NotFound";

function App() {
  if (!TodoFeature || !AlbumFeatures) {
    <NotFound />;
  }
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>{" "}
      {/*Dùng làm menu*/}
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <TodoFeature />
      <AlbumFeatures />
      <footer className="footer">Trịnh Quang</footer>
    </div>
  );
}

export default App;
