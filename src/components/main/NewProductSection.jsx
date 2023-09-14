import Grid from "@mui/material/Grid";
import ReusableProduct from "../../ui/ReusableProduct";

// const cards = [1, 2, 3, 4];
const products = [
  {
    name: "Shoes 1",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
  },
  {
    name: "Shoes 2",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
  },
  {
    name: "Shoes 3",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
  },
  {
    name: "Shoes 4",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
  },
];
const NewProductSection = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ p: 8 }}>
        {products.map((product, index) => (
          <ReusableProduct
            key={index}
            productName={product.name}
            imageUrl={product.imageUrl}
          />
        ))}
      </Grid>
    </>
  );
};

export default NewProductSection;
