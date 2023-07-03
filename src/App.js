import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/products/:id" element={<Details></Details>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
