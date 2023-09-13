import Grid from "@mui/material/Grid";
import ReusableProduct from "../../ui/ReusableProduct";

const products = [
  {
    name: "Shoes 1",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
    buttonText: "Shop Scent 1",
  },
  {
    name: "Shoes 2",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
    buttonText: "Shop Scent 2",
  },
  {
    name: "Shoes 3",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
    buttonText: "Shop Scent 3",
  },
];

const ShopProduct = () => {
  return (
    <Grid container spacing={3} sx={{ p: 8 }}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={3}>
          <ReusableProduct
            key={index}
            productName={product.name}
            imageUrl={product.imageUrl}
            buttonText={product.buttonText}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ShopProduct;
