import { CartModal } from "./components/CartModal";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { ProductProvider } from "./context/ProductProvider";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Navbar />
        <ProductList />
        <CartModal />
      </ProductProvider>
    </div>
  );
}

export default App;
