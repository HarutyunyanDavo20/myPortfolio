import React from "react";
import { Route, Routes } from "react-router-dom";
import Applist from "../../components/Applist";
import CatPage from "../catPage/CatPage";
import StoreOnline from "../storePage/components/StoreOnline";
import TodoPage from "../TodoPage/TodoPage";

const Apps = () => {
  return (
    <Routes>
      <Route path="/" element={<Applist />} />
      <Route path="todos" element={<TodoPage />} />
      <Route path="cats/*" element={<CatPage />} />
      <Route path="store" element={<StoreOnline />} />
    </Routes>
  );
};

export default Apps;
