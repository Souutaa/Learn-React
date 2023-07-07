import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";
import NotFound from "../../../components/NotFound";

TodoFeature.prototypes = {};

function TodoFeature() {
  return (
    <Routes>
      <Route path="todos">
        <Route index element={<ListPage />} />
        <Route path=":todoId" element={<DetailPage />} />
        {/* <Route element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default TodoFeature;
