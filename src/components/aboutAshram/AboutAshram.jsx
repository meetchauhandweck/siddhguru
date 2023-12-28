import shape from "../../images/aboutShape.svg";
import aboutAshram from "../../images/aboutAshramImage.png";
import leaf1 from "../../images/aboutAshramLeaf1.svg";
import leaf2 from "../../images/aboutAshramLeaf2.svg";
import leaf3 from "../../images/aboutAshramLeaf3.svg";
import leaf4 from "../../images/aboutAshramLeaf4.svg";
import "./aboutAshram.scss";
const AboutAshram = () => {
  return (
    <div className="aboutAshram">
      <div className="aboutAshram_wrapper">
        <div className="aboutAshram_wrapper_image">
          <div className="shape_image">
            <img src={shape} alt="shapeImage" />
          </div>
          <div className="shape_image leaf1">
            <img src={leaf1} alt="shapeImage" />
          </div>
          <div className="shape_image leaf2">
            <img src={leaf2} alt="shapeImage" />
          </div>
          <div className="shape_image leaf3">
            <img src={leaf3} alt="shapeImage" />
          </div>
          <div className="shape_image leaf4">
            <img src={leaf4} alt="shapeImage" />
          </div>
          <div className="shape_image main_image">
            <img src={aboutAshram} alt="shapeImage" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutAshram;
