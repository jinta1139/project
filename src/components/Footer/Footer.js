import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
import { Link } from "react-router-dom";


const Footer = () => {
    return ( 
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                      <div className="logo footer_logo text-start">
                        <img src={logo} alt="logo" className="footer_img"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Animi, laudantium. Lorem ipsum dolor sit amet.</p>
                       </div>
                    </Col>
                    <Col lg='3' md='4' sm='1'>
                        <h4 className="footer_title">Delivery Time</h4>
                        <ListGroup className="deliver_time-list" >
                          <ListGroupItem className="delivery_time-item border-0 ps-0">
                           <span>Monday-Thursday</span>
                           <p>10:00am - 9:00pm</p>
                            </ListGroupItem>  
                          <ListGroupItem className="delivery_time-item border-0 ps-0">
                           <span>Friday-Sunday</span>
                           <p>10:00am - 11:00pm</p>
                            </ListGroupItem>  
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h4 className="footer_title">Contact</h4>
                        <ListGroup className="deliver_time-list" >
                            <ListGroupItem className="delivery_time-item border-0 ps-0">
                           <span>Location: Gombe main market</span>
                           </ListGroupItem> 
                          <ListGroupItem className="delivery_time-item border-0 ps-0">
                           <span>Phone: 08122567890</span>
                           
                            </ListGroupItem>  
                          <ListGroupItem className="delivery_time-item border-0 ps-0">
                           <span>Email:example@gmail.com</span>
                            </ListGroupItem>  
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5 className="footer_title">Newsletter</h5>
                        <p>Suscribe our newsletter</p>
                        <div className="newsletter">
                            <input
                             type="email"
                              placeholder="Enter your email"
                            />
                            <span>
                                <i class="ri-send-plane-line"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg='6' md='6'>
                        <p className="copyright_text">
                            Copyright@2023, designed by group six. All Rights Reseverd
                         </p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="social_links d-flex align-items-center gap-4 
                           justify-content-end">
                           <p className="m-0">Follow:</p> 
                           <span>
                            <Link to='/'><i class="ri-facebook-circle-fill"></i>
                            </Link>
                           </span>
                           <span>
                            <Link to='/'><i class="ri-instagram-line"></i>
                            </Link>
                           </span>
                           <span>
                            <Link to='/'><i class="ri-twitter-line"></i></Link>
                           </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;