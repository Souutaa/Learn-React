import React from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import AlbumFeatures from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";

function App() {
  return (
    <div className="App">
      <i className="fa fa-header" aria-hidden="true">
        Quang Long
      </i>
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>{" "}
      {/*Dùng làm menu*/}
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      {/* <Routes>
        <Route path="todos" element={<TodoFeature />} />
        <Route element={<AlbumFeatures />} />
      </Routes> */}
      <TodoFeature />
      <AlbumFeatures />
      <footer className="footer">Trịnh Quang</footer>
    </div>
  );
}

export default App;
