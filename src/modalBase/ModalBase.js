import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeCatModal } from "../app/globalSlice";
import CatModal from "../modals/CatModal";

import LazyLoading from "./LazyLodaing";

const ModalBase = () => {
  const dispach = useDispatch();
  const modalSlice = useSelector((state) => state.globalState);
  const { url, width, height } = modalSlice;

  const handleCloseModall = () => dispach(closeCatModal());

  const neadPopap = () => {
    if (url.length > 0) {
      return <CatModal url={url} width={width} height={height} handleCloseModall={handleCloseModall} />;
    }
  };

  return (
    <div>
      <Suspense fallback={<LazyLoading />}>{neadPopap()}</Suspense>
    </div>
  );
};

export default ModalBase;
