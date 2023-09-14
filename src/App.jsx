import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import HomeContent from "./components/main/HomeContent";
import ProductList from "./components/main/ProductList";
import SponsorSection from "./components/main/SponsorSection";
import ShopProductList from "./components/main/ShopProductList";
import ThanksSection from "./components/main/ThanksSection";
import CustomerCare from "./components/main/CustomerCare";
import NewProductSection from "./components/main/NewProductSection";
import JournalSection from "./components/main/JournalSection";
import ReviewSection from "./components/main/ReviewSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeContent />
        <ProductList />
        <SponsorSection />
        <ShopProductList />
        <ThanksSection />
        <NewProductSection />
        <CustomerCare />
        <JournalSection />
        <ReviewSection />
        <Footer />
      </Main>
    </>
  );
};
export default App;
