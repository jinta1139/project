import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="hero_title mb-4">
                  <span>HUNGRY?</span> just wait <br /> food at
                   <span> your door</span>
                </h1>
                
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt doloribus sed, asperiores ipsum repellendus natus.

                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <button className="order_btn d-flex align-items-center justify-content-between ">
                    Order now <i className="ri-arrow-right-s-line"></i>
                </button>
                
                <button className="all_foods-btn">
                    <Link to="/foods">See all foods</Link>
                </button>
                </div>
                
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
