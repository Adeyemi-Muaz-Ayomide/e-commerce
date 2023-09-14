import Grid from "@mui/material/Grid";
import ReusableProduct from "../../ui/ReusableProduct";
// import { Link } from "@mui/icons-material"; //For now but it is from react router

// const cards = [1, 2, 3, 4];
const products = [
  {
    name: "The ultimate guide to building an effective skincare routine",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
  },
  {
    name: "10 must-have shoes",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
  },
  {
    name: "Benefits of putting on sneakers",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
  },
  {
    name: "The science behind wearing good shoes",
    imageUrl: "https://source.unsplash.com/random?wallpapers",
  },
];
const Journal = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ p: 8 }}>
        {products.map((product, index) => (
        //   <Link>
            <ReusableProduct
              key={index}
              productName={product.name}
              imageUrl={product.imageUrl}
            />
        //   </Link>
        ))}
      </Grid>
    </>
  );
};

export default Journal;
<h3 class="heading regular">The ultimate guide to building an effective skincare routine</h3>