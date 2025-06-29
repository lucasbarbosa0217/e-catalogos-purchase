import Swiper from 'swiper';
import './App.css'
import BottomPart from './components/bottomPart';
import Footer from './components/footer';
import FooterQuantity from './components/footerQuantity';
import Header from './components/header';
import ImageAndFunctions from './components/imageAndFunctions';
import Information from './components/information';
import MainContent from './components/main';
import productData from './data/products.json'
import type ApiResponse from './models/ApiRespose'
import type Product from './models/Product';

function App() {
  const data: ApiResponse = productData as ApiResponse;
  const products: Product[] = data.products;

  return (

      <>
        <Header />

        <MainContent>
        </MainContent>
      
        <BottomPart>
        <ImageAndFunctions produto={products[6]} />
        <Information product={products[6]} />
        <FooterQuantity produto={products[6]} />
        <Footer produto={products[6]} />
        </BottomPart>
       
      </>
  );
}

export default App;
