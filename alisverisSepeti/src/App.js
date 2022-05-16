import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Products from "./components/Products";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
