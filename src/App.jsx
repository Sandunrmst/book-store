import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookDetailsPage from "./pages/bookDetails";
import BookListPage from "./pages/bookList";
import CartListPage from "./pages/cartList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookListPage />} />
        <Route path="/product-details/:id" element={<BookDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
      </Routes>
    </>
  );
}

export default App;
