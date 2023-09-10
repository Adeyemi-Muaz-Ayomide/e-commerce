import Header from "./components/Header";
import Essential from "./components/main/Essential";
import Main from "./components/main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Essential />
      </Main>
    </>
  );
};
export default App;
