import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";
import reacticon from "../assets/img/reacticon.svg";

import { CircleProgress } from "react-gradient-progress";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // const percentage = 10;
  const percentage = 66;

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills & Experiences</h2>
              <p>
              I have experience working on web application development, responsive design implementation,I have strong skills in Git, Visual Studio Code, tailwind CSS, Bootstrap, Ant Design and software development principles, and I am dedicated to continuously improving my skills.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                showDots={true}
                className="owl-carousel owl-theme skill-slider itemstyle "
              >
                <div className="item">
                  <CircleProgress
                    percentage={70}
                    strokeWidth={18}
                    primaryColor={["#8B34B4", "#615EDC"]}
                    secondaryColor=""
                    fontSize="20px"
                  />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <CircleProgress
                    percentage={70}
                    strokeWidth={18}
                    primaryColor={["#8B34B4", "#615EDC"]}
                    secondaryColor=""
                    fontSize="20px"
                  />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <CircleProgress
                    percentage={100}
                    strokeWidth={18}
                    primaryColor={["#8B34B4", "#615EDC"]}
                    secondaryColor=""
                    fontSize="20px"
                  />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <CircleProgress
                    percentage={70}
                    strokeWidth={18}
                    primaryColor={["#8B34B4", "#615EDC"]}
                    secondaryColor=""
                    fontSize="20px"
                  />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <CircleProgress
                    percentage={70}
                    strokeWidth={18}
                    primaryColor={["#8B34B4", "#615EDC"]}
                    secondaryColor=""
                    fontSize="20px"
                  />
                  <h5>Web Development</h5>
                </div>
              </Carousel>

              <div className="experience">
                <h2>Languages</h2>
                <p>lorem</p>
                <div>
                  <Row>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    {/* </Row>  
                      <Row> */}
                    {/* <Col size={12}  className="px-1">
                          <div className="card" >
                            React
                          </div>
                        </Col>
                        <Col size={12}  className="px-1">
                          <div className="card" >
                            React
                          </div>
                        </Col>
                        <Col size={12}  className="px-1">
                          <div className="card" >
                            React
                          </div>
                        </Col>
                        <Col size={12}  className="px-1">
                          <div className="card" >
                            React
                          </div>
                        </Col> */}
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experiences">
                <h2>Languages</h2>
                <p>lorem</p>
                <div>
                  <Row>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    <Col size={12} className="px-1">
                      <div className="card stcard">
                        <img className="langicons" src={reacticon} alt="" />
                        <p className="card-text">React</p>
                      </div>
                    </Col>
                    {/* </Row>  
                      <Row> */}
                    {/* <Col size={12}  className="px-1">
                          <div className="card" >
                            React
                          </div>
                        </Col>
                        <Col size={12}  className="px-1">
                          <div className="card" >
                            React
                          </div>
                        </Col>
                        <Col size={12}  className="px-1">
                          <div className="card" >
                            React
                          </div>
                        </Col>
                        <Col size={12}  className="px-1">
                          <div className="card" >
                            React
                          </div>
                        </Col> */}
                  </Row>
                </div>
              </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
