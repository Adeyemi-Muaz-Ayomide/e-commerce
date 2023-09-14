import Grid from "@mui/material/Grid";
import ReusableProduct from "../../ui/ReusableProduct";

// const cards = [1, 2, 3, 4];
const products = [
  {
    name: "Sneakers",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
    productUsage: 'Hydro Repair',
    productPrice: '$15.00 USD'
  },
  {
    name: "Fix",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
    productUsage: 'Bla bla',
    productPrice: '$39.00 USD'
  },
  {
    name: "Dunlop",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
    productUsage: 'Eaaaazy',
    productPrice: '$15.00 USD'
  },
  {
    name: "Crocs",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
    productUsage: 'sooooft',
    productPrice: '$15.00 USD'
  },
];
const ProductList = () => {
  return (
    <>
      <div className="mx-16 mt-10 flex items-center justify-between">
        <h3 className="font-iSerif text-[30px] font-normal leading-5 tracking-[.1em] min-[676px]:text-[40px]">
          Bestselling
        </h3>
        <button className="w-20 rounded-[10px] border bg-white p-2 hover:opacity-80">
          Shop all
        </button>
      </div>
      <Grid container spacing={3} sx={{ p: 8 }}>
        {products.map((product, index) => (
          <ReusableProduct
            key={index}
            productName={product.name}
            imageUrl={product.imageUrl}
            productUsage={product.productUsage}
            productPrice={product.productPrice}
          />

        ))}
      </Grid>
    </>
  );
};

export default ProductList;
