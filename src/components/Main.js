import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getFetching, getImages, getNewImages } from "../app/imageSlice";
import Loading from "../UI/loading";
import Images from "./Images";
import Searching from "./Searching";

const Main = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const imageState = useSelector((state) => state.images);
  const { images, page, isLoading, fetching } = imageState;

  const [filterImages, setFilterImages] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isIdSet, setIsIdSet] = useState(false);

  useEffect(() => {
    dispatch(getNewImages(page, id));
  }, [id]);

  useEffect(() => {
    if (isIdSet) {
      setIsIdSet(false);
      dispatch(getNewImages(1, id));
    }
  }, [isIdSet]);

  useEffect(() => {
    // for adding Images
    if (fetching) {
      dispatch(getImages(page, id));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return function () {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  function handleScroll(e) {
    const body = e.target.documentElement;
    if (body.scrollHeight - (body.scrollTop + window.innerHeight) < 20) {
      if (!fetching) {
        dispatch(getFetching());
      }
    }
  }

  const handleSearch = (text) => {
    if (text === "") {
      setFilterImages([]);
      setNotFound(false);
    } else if (
      text.length &&
      images.filter((img) => (img.id.search(text) !== -1 ? true : false)).length
    ) {
      setFilterImages(
        images.filter((img) => (img.id.search(text) !== -1 ? true : false))
      );
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };
  return (
    <>
      <Searching handleSearch={handleSearch} />
      <h2>images {notFound ? "0" : filterImages.length || images.length}</h2>
      {notFound ? (
        <h2 style={{ fontSize: 50, textAlign: "center", marginTop: "300px" }}>
          Not Found
        </h2>
      ) : (
        <>
          <Images
            images={filterImages.length ? filterImages : images}
            handleSearch
          />
          <div style={{ textAlign: "center" }}>
            {isLoading ? <Loading /> : <></>}
          </div>
        </>
      )}
    </>
  );
};

export default Main;
