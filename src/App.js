import "./App.css";
// import { Route, Switch } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import RegisterUserScreen from "./screens/RegisterUserScreen";
import Items from "./screens/Items";
import AddItem from "./screens/AddItem";
import LoginScreen from "./screens/LoginScreen";
import Footer from "./components/Footer";
import ProductListPage from "./screens/ProductListPage";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/SIGN UP" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterUserScreen />} />
          <Route path="/products" element={<ProductListPage />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
