import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cardSlice";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
import { addToFavorites } from "../../redux/favoritesSlice";

const DetailComp = ({ productDetail, favorites }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    if (!favorites) {
      console.log("Ürün bilgisi bulunamadı.");
      return;
    }
    const favoriteItem = { id: favorites.id, name: favorites.name };
    dispatch(addToFavorites(favoriteItem));
  };

  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(Number(quantity) - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(Number(quantity) + 1);
    }
  };
  const changeQuantity = (e) => {
    if (e.target.value > productDetail?.rating?.count) {
      e.target.value = productDetail?.rating?.count;
    } else {
      setQuantity(e.target.value);
    }
  };

  const colorfulRatingScore = () => {
    if (productDetail?.rating?.rate > 4) {
      return "#069118";
    } else if (productDetail?.rating?.rate > 3) {
      return "#06917a";
    } else if (productDetail?.rating?.rate > 2) {
      return "#859106";
    } else if (productDetail?.rating?.rate > 1) {
      return "#915906";
    } else if (productDetail?.rating?.rate > 0) {
      return "#910606";
    }
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="d-flex gap-5">
      <img
        src={productDetail?.image}
        alt=""
        className="border rounded p-1"
        style={{ width: "600px", height: "600px" }}
      />
      <div>
        <h3 className="boldText">{productDetail?.title}</h3>
        <p>{productDetail?.description}</p>
        <div className="d-flex justify-content-between">
          <p>
            {" "}
            <span className="boldText">Rate: </span>
            <span className="boldText" style={{ color: colorfulRatingScore() }}>
              {productDetail?.rating?.rate}
            </span>
          </p>
          <p>
            <span className="boldText">Count: </span>
            {productDetail?.rating?.count}
          </p>
          <p>
            <span className="boldText">Price: </span>
            {productDetail?.price}
            <span>$</span>
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-evenly my-3">
          <div onClick={decreaseQuantity} className="addPointerCursor">
            <AiOutlineMinus></AiOutlineMinus>
          </div>
          <input
            className="detailInput"
            type="number"
            onChange={changeQuantity}
            value={quantity}
          />
          <div onClick={increaseQuantity} className="addPointerCursor">
            <AiOutlinePlus></AiOutlinePlus>
          </div>
          <button className="btn btn-secondary" onClick={addBasket}>
            Sepete Ekle
          </button>
          <div className="" onClick={handleAddToFavorites}>
            <AiOutlineHeart></AiOutlineHeart>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center"></div>
      </div>
    </div>
  );
};

export default DetailComp;
