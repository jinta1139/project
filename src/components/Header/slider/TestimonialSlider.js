import Slider from "react-slick"
import ava01 from '../../../assets/images/photo1.png'
import ava02 from '../../../assets/images/photo2.png'
import ava03 from '../../../assets/images/photo3.png'

import '../../../styles/slider.css'

const TestimonialSlide = () => {
   
  const settings ={
    dots:true,
    autoplay: true,
    isFinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
   
    return ( 
        <Slider {...settings}>
            <div>
                <p className="review_text">
                    Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. Voluptatibus,
                      nesciunt ipsam? Ad magnam ut rem vel architecto quisquam
                       iusto sed reprehenderit omnis eaque, amet quod reiciendis,
                        veritatis deserunt illum tempore.
                </p>
                <div className="slider_content d-flex align-items-center gap-3">
                    <img src={ava01} alt="ava01" className="rounded" />
                    <h6>Peter Silas</h6>
                    </div>
            </div>
            <div>
                 <p className="review_text">
                    Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. Voluptatibus,
                      nesciunt ipsam? Ad magnam ut rem vel architecto quisquam
                       iusto sed reprehenderit omnis eaque, amet quod reiciendis,
                        veritatis deserunt illum tempore.
                </p>
                <div className="slider_content d-flex align-items-center gap-3">
                    <img src={ava02} alt="ava02"  className="rounded"/>
                    <h6>Isabella John</h6>
                    </div>
            </div>
            <div>
               <p className="review_text">
                    Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. Voluptatibus,
                      nesciunt ipsam? Ad magnam ut rem vel architecto quisquam
                       iusto sed reprehenderit omnis eaque, amet quod reiciendis,
                        veritatis deserunt illum tempore.
                </p>
                <div className="slider_content d-flex align-items-center gap-3">
                    <img src={ava01} alt="ava01" className="rounded"  />
                    <h6>Peter Andrew</h6>
                    </div>
            </div>
        </Slider>
     );
}
 
export default TestimonialSlide;