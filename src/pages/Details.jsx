import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  // console.log("product detail: ", productDetail);
  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading></Loading>
      ) : (
        <DetailComp productDetail={productDetail}></DetailComp>
      )}
    </div>
  );
};

export default Details;
