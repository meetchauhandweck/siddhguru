import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homePageSlider1.scss";
import image1 from "../../images/vision.png";
import image2 from "../../images/the_saint.png";
import image3 from "../../images/core_wisdom.png";
import blank from "../../images/vision_blank.png";
import { useEffect, useState } from "react";

const HomePageSlider1 = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const images = [
    {
      image: image1,
      text: "Vision",
      color: "#F90",
      content:
        "Sri Siddhguru’s vision is to raise the consciousness of humanity to the divine consciousness by spreading the message of divine life to spiritual sojourners and seekers of peace & bliss. Gurudev is on a mission to end the toiling and suffering of the people and at the same time bring them liberation from the bondage of Karma Bandhan.",
    },
    {
      image: image2,
      text: "Core Wisdom",
      color: "#966940",
      content:
        "Life is not a painful quest of chasing happiness. Life is a festival that deserves to be celebrated every day, every moment by living happily. Service to humanity is the best work of life! It is the best way to experience pure joy. Everyone should seek wealth and richness - material, intellectual, moral, and spiritual - so that they can serve humanity as a service to God.",
    },
    {
      image: image3,
      text: "The Saint",
      color: "#1D523B",
      content:
        "Siddhguru Sri Siddheshwar Brahmrishi Gurudev is an incarnation of a divine Siddh soul, a radiant flame of wisdom, a beacon of hope for people from all walks of life. Like a river of enlightenment, cutting through the landscape of ignorance and igniting the spark of divinity within each individual, his teachings have been transforming the lives of countless devotees.",
    },
    {
      image: image1,
      text: "Vision",
      color: "#F90",
      content:
        "Sri Siddhguru’s vision is to raise the consciousness of humanity to the divine consciousness by spreading the message of divine life to spiritual sojourners and seekers of peace & bliss. Gurudev is on a mission to end the toiling and suffering of the people and at the same time bring them liberation from the bondage of Karma Bandhan.",
    },
    {
      image: image2,
      text: "Core Wisdom",
      color: "#966940",
      content:
        "Life is not a painful quest of chasing happiness. Life is a festival that deserves to be celebrated every day, every moment by living happily. Service to humanity is the best work of life! It is the best way to experience pure joy. Everyone should seek wealth and richness - material, intellectual, moral, and spiritual - so that they can serve humanity as a service to God.",
    },
    {
      image: image3,
      text: "The Saint",
      color: "#1D523B",
      content:
        "Siddhguru Sri Siddheshwar Brahmrishi Gurudev is an incarnation of a divine Siddh soul, a radiant flame of wisdom, a beacon of hope for people from all walks of life. Like a river of enlightenment, cutting through the landscape of ignorance and igniting the spark of divinity within each individual, his teachings have been transforming the lives of countless devotees.",
    },
  ];
  const settings = {
    infinite: true, //to allow the slides to show infinitely
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    appendDots: ".slider_dots",
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 5000,
    // useTransform: false,
    beforeChange: (current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "0px",
    speed: 1000,
  };
  return (
    <div className="homePageSlider">
      <div className="container">
        <div className="homePageSlider_wrapper">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider) => setSlider1(slider)}
          >
            {images.map((item, idx) => (
              <div
                key={idx}
                className={idx === imgIndex ? "slide activeSlide" : "slide"}
              >
                <div className="card_content">
                  <div
                    className="card_content_image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <img src={blank} alt="image" />
                  </div>
                  <div
                    className="image_text"
                    style={{ backgroundColor: `${item.color}` }}
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider_thumbnail_wrapper">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {images.map((item, idx) => (
              <div
                key={idx}
                className={
                  idx === imgIndex
                    ? "slidethumbnail activeSlideThimbnail"
                    : "slidethumbnail"
                }
              >
                <div className="thumbnail_text">{item.content}</div>
                <div className="slider_btn">
                  <a href="#" className="button-57" role="button">
                    <span className="text">Read More</span>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="slider_dots"></div>
    </div>
  );
};
export default HomePageSlider1;
