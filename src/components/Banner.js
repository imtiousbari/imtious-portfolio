import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ConnectButton } from "../components/ConnectButton";
import { Emailjs } from "./Emailjs";
// import { useNavigate } from 'react-router-dom';


export const Banner = () => {
 
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;
  // const history = useNavigate();

  // const handleClick = () => {
  //   history.push('/sendmail');
  // };
  const handleClickScroll = () => {
    const element = document.getElementById('sendemail');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center  ">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>
                    {`Hi! I'm Imtious`}
                    {/* <p>hello</p> */}
                    <br></br>

                    <span
                      className="txt-rotate text-6xl"
                      dataPeriod="500"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  As a recent graduate from BRAC University with a specialization in front-end development, I am excited to bring my skills and knowledge to your team. I have experience in creating responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and other front-end frameworks.
                  </p>

                  <button onClick={handleClickScroll
                    // () => console.log("connect")
                  }
                    >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                  
                  {/* <HashLink to="#sendemail">
                    <button className="">
                      <span>Let’s Connect</span>
                    </button>
                  </HashLink> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* <Col xs={24} md={6} xl={7}> */}
          {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 
                "" : ""}
                >
                  
                <img  classname="bannerimgg" src={headerImg} alt="Header Img"/>
                </div>}
                </TrackVisibility> */}
          {/* </Col> */}
          {/* <Col xs={12} md={8} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
      {/* <Skills /> */}
    </section>
  );
}
