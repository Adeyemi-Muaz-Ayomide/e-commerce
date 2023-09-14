import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const ReusableProduct = ({
  productName,
  imageUrl,
  productPrice,
  productUsage,
}) => {
  return (
    <Grid item xs={6} sm={6} md={3}>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "130%",
            backgroundSize: "cover",
          }}
          image={imageUrl}
        />
      </Card>
      <div className="mt-5">
        <h3 className=" font-iSerif text-xl font-normal leading-5 tracking-[0.01em] text-[#6b5c4c] max-[479px]:text-lg p-1">
          {productName}
        </h3>
        <h3 className=" font-iSerif text-2xl font-normal leading-5 tracking-[0.01em] text-[#0f172a] max-[479px]:text-lg p-1">
          {productUsage}
        </h3>
        <p className=" font-inter text-sm font-medium leading-5 tracking-[0.01em] text-[#455366] max-[479px]:text-lg p-1">
          {productPrice}
        </p>
      </div>
    </Grid>
  );
};

export default ReusableProduct;
