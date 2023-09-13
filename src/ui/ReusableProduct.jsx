import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const ReusableProduct = ({ productName, imageUrl }) => {
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
      <div>
        <h1>{productName}</h1>
      </div>
    </Grid>
  );
};

export default ReusableProduct;
