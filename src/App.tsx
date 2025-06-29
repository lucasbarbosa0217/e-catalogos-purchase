import './App.css'
import Header from './components/header';
import productData from './data/products.json'
import type ApiResponse from './models/ApiRespose'
import type Product from './models/Product';

function App() {
  const data: ApiResponse = productData as ApiResponse;
  const products: Product[] = data.products;

  return (

      <>
        <Header />
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>Reference: {product.reference}</p>
            <p>Type: {product.type}</p>
          </div>
        ))}
      </>
  
  );
}

export default App;
