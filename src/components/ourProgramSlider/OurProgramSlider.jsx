import "./ourProgramSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Carousel_layer from "../../images/sliderBg.png";
import Carousel_layer2 from "../../images/our_program_slider_image2.png";
import Carousel_layer1 from "../../images/sliderGuru.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function OurProgramSlider() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="sidhhguru_slider_section">
      <motion.div
        ref={ref}
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
        className="sidhhguru_slider_header"
      >
        <p>Our Programs</p>
      </motion.div>
      <div className="ourProgram_slider_sec">
        <Swiper
          pagination={{
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
          }}
          slidesPerView={1.1}
          centeredSlides={false}
          loop={true}
          spaceBetween={40}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="carousel_image_container">
                <img
                  src={Carousel_layer}
                  alt="image"
                  className="carousel_layer_img"
                />
                <div className="carousel_overlay_text">
                  <div className="carousel_overlay_text_content">
                    <div className="carousel_section_text">
                      <p className="carousel_first_text">
                        Have Gurudev as your partner & protector for this life
                        and every life!
                      </p>
                      {/* <p className="carousel_first_text">transform your life</p> */}
                      <p className="carousel_second_text">Digital Diksha</p>
                      <div className="carousel_slider_button_outer">
                        <button className="carousel_slider_button">
                          Register Now
                        </button>
                      </div>
                    </div>
                    <div className="carousel_section_image">
                      <img
                        src={Carousel_layer1}
                        alt=""
                        className="carousel_guru_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <div> */}
            <div className="carousel_image_container">
              <img
                src={Carousel_layer2}
                alt="image"
                className="carousel_layer_img"
              />
              <div className="carousel_overlay_text">
                <div className="carousel_overlay_text_content">
                  <div className="carousel_section_text">
                    <p className="carousel_first_text">
                      divya dhrishtri diksha
                    </p>
                    <p className="carousel_first_text">transform your life</p>
                    <p className="carousel_second_text">Sri siddhguru</p>
                    <div className="carousel_slider_button_outer">
                      <button className="carousel_slider_button">
                        Register Now
                      </button>
                    </div>
                  </div>
                  <div>
                    <img
                      src={Carousel_layer1}
                      alt=""
                      className="carousel_guru_img"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <div> */}
            <div className="carousel_image_container">
              <img
                src={Carousel_layer}
                alt="image"
                className="carousel_layer_img"
              />
              <div className="carousel_overlay_text">
                <div className="carousel_overlay_text_content">
                  <div className="carousel_section_text">
                    <p className="carousel_first_text">
                      divya dhrishtri diksha
                    </p>
                    <p className="carousel_first_text">transform your life</p>
                    <p className="carousel_second_text">Sri siddhguru</p>
                    <div className="carousel_slider_button_outer">
                      <button className="carousel_slider_button">
                        Register Now
                      </button>
                    </div>
                  </div>
                  <div>
                    <img
                      src={Carousel_layer1}
                      alt=""
                      className="carousel_guru_img"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}
export default OurProgramSlider;
