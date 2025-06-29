import './App.css';
import BottomPart from './components/bottomPart';
import Footer from './components/footer';
import FooterQuantity from './components/footerQuantity';
import Header from './components/header';
import ImageAndFunctions from './components/imageAndFunctions';
import Information from './components/information';
import MainContent from './components/main';
import ProductSwiper from './components/ProductSwiper';
import { useProductContext } from './contexts/ProductContext';

function App() {
  const { products, selectedProduct } = useProductContext();

  if (products.length === 0 || !selectedProduct) return <div>Carregando produtos...</div>;

  return (
    <>
      <Header />

      <MainContent>
        <ProductSwiper products={products} />
      </MainContent>

      <BottomPart>
        <ImageAndFunctions produto={selectedProduct} />
        <Information product={selectedProduct} />
        <FooterQuantity />
        <Footer produto={selectedProduct} />
      </BottomPart>
    </>
  );
}

export default App;
