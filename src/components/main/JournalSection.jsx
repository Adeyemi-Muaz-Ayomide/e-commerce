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
      <div className="mx-10 mt-5 flex items-center justify-between">
        <h3 className="font-iSerif text-[22px] font-normal leading-5 md:text-[40px] md:tracking-[0.1em]">
          From our journal
        </h3>
        <button className="w-15 rounded-[10px] border bg-white p-2 hover:opacity-80">
          Read all
        </button>
      </div>
      <Grid container spacing={3} sx={{ p: 3 }}>
        {products.map((product, index) => (
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

// sx={{
//         display: "flex",
//         flexDirection: "column",
//         width: "100%",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "10px",
//         maxWidth: "150%",
//       }}
