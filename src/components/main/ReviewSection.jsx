import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

const review = [
  {
    id: 118836,
    rating: 5,
    name: "Clark",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ex repudiandae. Corporis aperiam nam, adipisci sequi est praesentium optio ipsa ab quasi, vel eligendi reiciendis..",
    image: "https://i.pravatar.cc/48?u=118836",
  },
  {
    id: 933372,
    rating: 4,
    name: "Sarah",
    review:
      "Sed, ex repudiandae. Corporis aperiam nam, adipisci sequi est praesentium optio ipsa ab quasi, vel eligendi reiciendis. Dolore laudantium soluta totam itaque.",
    image: "https://i.pravatar.cc/48?u=933372",
  },
  {
    id: 499486,
    rating: 2.5,
    name: "Anthony",
    review:
      "Lorem Sed, ex repudiandae. Corporis aperiam nam, adipisci sequi est praesentium optio ipsa ab quasi, vel eligendi reiciendis. Dolore laudantium soluta totam itaque.",
    image: "https://i.pravatar.cc/48?u=499476",
  },
  {
    id: 499346,
    rating: 3.5,
    name: "modeste",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ex repudiandae. Corporis aperiam nam, adipisci sequi est praesentium optio ipsa ab quasi, vel eligendi reiciendis. Dolore laudantium soluta totam itaque.",
    image: "https://i.pravatar.cc/48?u=499562",
  },
  {
    id: 493476,
    rating: 5,
    name: "jim su",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ex repudiandae. Corporis aperiam nam, vel eligendi reiciendis. Dolore laudantium soluta totam itaque.",
    image: "https://i.pravatar.cc/48?u=499331",
  },
  {
    id: 499676,
    rating: 1.5,
    name: "hu hen",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing Dolore laudantium soluta totam itaque.",
    image: "https://i.pravatar.cc/48?u=499122",
  },
];

const ReviewSection = () => {
  return (
    <>
      <Grid
        container
        sx={{ backgroundColor: "#f2ede9" }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 15 }}
      >
        {review.map((item, index) => (
          <Grid xs={12} sm={4} md={4} lg={6} key={index}>
            <div className="mx-6 my-5">
              <Card sx={{ borderRadius: "10px" }}>
                <CardContent sx={{ margin: "15px" }}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.rating}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: 15,
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: "#455366",
                    }}
                  >
                    {item.review}
                  </Typography>
                  <div className="mt-4">
                    <h3 className="text-[16px] font-medium">{item.name}</h3>
                    <h4 className="text-[14px] text-[#455366]">@handle</h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ReviewSection;
