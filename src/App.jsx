import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Content from "./components/main/ResponsiveStack";
import Product from "./components/main/Product";
import Sponsor from "./components/main/Sponsor";
import ShopProduct from "./components/main/Product";
import Thanks from './components/main/Thanks'
import Care from "./components/main/Care";
import NewProduct from "./components/main/NewProduct";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Content />
        <Product />
        <Sponsor />
        <ShopProduct />
        <Thanks />
        <NewProduct />
        <Care />
      </Main>
    </>
  );
};
export default App;
