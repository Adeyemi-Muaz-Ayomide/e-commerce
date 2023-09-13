import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const cards = [1, 2, 3, 4];
const Product = () => {
  return (
    <>
      {/* End hero unit */}
      <Grid container spacing={3} sx={{ p: 8 }}>
        {cards.map((card) => (
          <Grid item key={card} xs={6} sm={6} md={3}>
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
                image="https://source.unsplash.com/random?wallpapers"
              />
            </Card>
            <div>
              <h1>Shoes name</h1>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Product;
