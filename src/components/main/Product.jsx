import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
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
                width: '100%',
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

              {/* <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                This is a media card. You can use this section to describe the
                content.
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions> */}
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
