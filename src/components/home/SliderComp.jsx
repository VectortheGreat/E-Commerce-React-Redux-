import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";
import { useNavigate } from "react-router-dom";

const SliderComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  let randomSliderNumbers = [];
  for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * products.length);
    while (randomSliderNumbers.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * products.length);
    }
    randomSliderNumbers.push(randomNumber);
  }
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const slides = randomSliderNumbers.map((number) => {
    const product = products[number];
    if (product) {
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        imageUrl: product.image,
      };
    } else {
      return {
        id: "",
        title: "",
        description: "",
        imageUrl: "",
      };
    }
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className="slide-item d-flex align-items-center " key={slide.id}>
            {slide.title && (
              <div className="slide-content d-flex flex-column gap-3">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <button
                  onClick={() => navigate(`products/${slide.id}`)}
                  className="sliderButton mx-auto"
                >
                  View
                </button>
              </div>
            )}
            <img className="sliderImage " src={slide.imageUrl} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
