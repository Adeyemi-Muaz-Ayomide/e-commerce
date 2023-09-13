import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Content from "./components/main/ResponsiveStack";
import Product from "./components/main/Product";
import Sponsor from "./components/main/Sponsor";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Content />
        <Product />
        <Sponsor />
      </Main>
    </>
  );
};
export default App;
