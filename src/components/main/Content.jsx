import * as React from "react";
import Paper from "@mui/material/Paper";
import Button from "../../ui/Button";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f2ede9",
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: "left",
  color: theme.palette.text.secondary,
  width: "100%",
  height: "60vh",
}));

export default function ResponsiveStack() {
  return (
    <Item
      variant="outlined" square
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <div className="mb-5">
        <h1 className="mx-auto text-4xl font-bold leading-4 tracking-tight min-[767px]:text-5xl min-[991px]:text-6xl">
          A new age of skincare
        </h1>
      </div>
      <div className="min-[991px]:mx-20">
        <h3 className="max-w-xl text-xl">
          Welcome to the skincare revolution. The new age of beauty is here.
          Create a personalized routine with the best products. Helping you to
          achieve a youthful glow like never before.
        </h3>
        <Button className="bg-[#6b5c4c] text-white">Shop collection</Button>
        <Button className="bg-white text-black">Our story</Button>
      </div>
    </Item>
  );
}
