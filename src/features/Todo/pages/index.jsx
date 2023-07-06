import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";

TodoFeature.prototypes = {};

function TodoFeature() {
  return (
    <Routes>
      <Route path="todos">
        <Route index element={<ListPage />} />
        <Route path=":todoId" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default TodoFeature;
