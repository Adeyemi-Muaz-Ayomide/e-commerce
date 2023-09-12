import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Content from './components/main/Content'
import Product from "./components/main/Product";


const App = () => {


  return (
    <>
      <Header />
      <Main>
        <Content />
        <Product />
      </Main>
     
    </>
  );
};
export default App;
