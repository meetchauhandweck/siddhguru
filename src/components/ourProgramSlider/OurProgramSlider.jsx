import "./ourProgramSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Carousel_layer from "../../images/sliderBg.png";
import Carousel_layer1 from "../../images/sliderGuru.png";
function OurProgramSlider() {
  return (
    <div className="sidhhguru_slider_section">
      {/* header */}
      <div className="sidhhguru_slider_header">
        <p>Our Programs</p>
      </div>
      {/* header */}
      <div>
        <Swiper
          pagination={{
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
          }}
          slidesPerView={1.2}
          centeredSlides={false}
          loop={true}
          spaceBetween={-480}
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
            </div>
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