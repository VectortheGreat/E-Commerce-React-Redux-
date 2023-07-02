import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      {" "}
      <Slider {...settings}>
        <div className="d-flex align-items-center">
          <div>
            <div>En Kaliteli Ürünler</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              eaque nam error necessitatibus quos dolore natus a libero culpa
              nulla vitae hic repellendus, officia, aliquam, enim eos beatae
              totam ipsa!
            </div>
          </div>
          <img
            src="https://img.wattpad.com/62b56f942f1264bc8cff273d98947f89de577d49/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6743704a774a336670376a6277413d3d2d3831333834343131332e313564663632353161313533656638613639343839333032333230322e6a7067?s=fit&w=720&h=720"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/236x/79/e6/6f/79e66ffb59534b9f5479a6201a5ed11f.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://img.joomcdn.net/16f3aaa564048603a7f68dd3c26a3dc86b4743ce_original.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.ticimax.cloud/30743/uploads/urunresimleri/kategorisizdegaje-yaka-daniela-elbise--c6c4ad.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://serline.com.tr/cdn-wp-upload_2022-teenger-K%C4%B1z-giyim-setleri-b%C3%BCy%C3%BCk-K%C4%B1zlar-K%C4%B1yafet/1-41057.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
