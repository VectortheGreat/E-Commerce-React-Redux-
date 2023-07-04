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
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const generateRandomSliderNumbers = () => {
    let randomSliderNumbers = [];
    for (let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * products.length);
      if (randomSliderNumbers.includes(randomNumber)) {
        continue;
      }
      randomSliderNumbers.push(randomNumber);
    }
    return randomSliderNumbers;
  };

  const randomSliderNumbers = generateRandomSliderNumbers();

  const slides = randomSliderNumbers.map((number) => {
    const product = products[number];
    if (product) {
      return {
        id: product.id,
        title: product.category,
        description: product.title,
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className="slide-item slideBackground" key={slide.id}>
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                {slide.title && (
                  <div className="slide-content">
                    <h3 className="m-3">
                      TOP QUALITY {slide.title.toUpperCase()} PRODUCTS
                    </h3>
                    <p className="m-3">{slide.description}</p>
                    <button
                      onClick={() => navigate(`products/${slide.id}`)}
                      className="sliderButton m-3 btn btn-light"
                    >
                      View
                    </button>
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <img
                  className="sliderImage ms-auto"
                  src={slide.imageUrl}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
