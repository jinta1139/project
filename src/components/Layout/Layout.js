import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import Routes from '../../routes/Routers';
import Carts from '../UI/cart/Carts.js';
import { useSelector } from 'react-redux';

const Layout = () => {

    const showCart = useSelector(state=> state.cartUi.cartUiIsVisible)
    return (  
        <div>
            <Header/>
          {showCart && <Carts/> }
            <div>
                <Routes/>
            </div>
            <Footer/>
        </div>  
    );
}
 
export default Layout;