import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Content from './components/main/Content'


const App = () => {


  return (
    <>
      <Header />
      <Main>
        <Content />
      </Main>
      {/* <Main>
        <Content />
        <Product />
        <Thanks />
      </Main> */}
      {/* <Main>
        <Content />
        <Product />
        <SeenProduct />
      </Main>
      <Footer /> */}
    </>
  );
};
export default App;
