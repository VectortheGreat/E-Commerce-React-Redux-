import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <div>
      {" "}
      <PageContainer>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
