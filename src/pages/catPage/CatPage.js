import React from "react";
import { Suspense } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import GoBack from "../../components/icons/GoBack";
import Main from "../../components/Main";
import Spiner from "../../components/Spiner";
import ModalBase from "../../modalBase/ModalBase";
import Layout from "./pages/Layout";
import NotFountPage from "./pages/NotFountPage";

const CatPage = () => {
  return (
    <div className="cat-main">
      <GoBack />
      <ModalBase />
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="category/:id" element={<Main />} />
            <Route path="*" element={<NotFountPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default CatPage;
