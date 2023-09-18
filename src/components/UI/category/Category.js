import { Container, Row, Col } from "reactstrap";
import categoryImg01 from '../../../assets/images/category-01.png';
import categoryImg02 from '../../../assets/images/category-02.png';
import "../../../styles/category.css";


const categoryData =[
    {
        display:'Fastfood',
        imgUrl: categoryImg02
    },
    {
        display:'Pizza',
        imgUrl: categoryImg02
    },
    {
        display:'Local dishes',
        imgUrl: categoryImg02
    },
    {
        display:'Meat',
        imgUrl: categoryImg02
    },
   
];


const Category = () => {
    return <Container>
        <Row>

            {
                categoryData.map((item, index) => (
                    <Col lg='3' md='4' sm='6' xs='6' className="mb-4">
                        <div className="category_item d-flex align-items-center gap-3">
                            <div className="category_img">
                                <img src={item.imgUrl} height='30px' alt="category_item" />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                       
                )  )
            }
            
        </Row>
    </Container>
}
 
export default Category;