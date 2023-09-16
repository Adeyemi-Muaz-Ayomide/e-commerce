import Paper from "@mui/material/Paper";
import Button from "../../ui/Button";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f2ede9",
  ...theme.typography.body2,
  // padding: theme.spacing(7),
  textAlign: "left",
  color: theme.palette.text.secondary,
  width: "100%",
  // height: "55vh", // Default height for xs screens
  [theme.breakpoints.up("xs")]: {
    height: "55%", // Height for md screens and larger
    padding: theme.spacing(5), // Padding for md screens and larger
  },
  [theme.breakpoints.up("sm")]: {
    height: "58%", // Height for md screens and larger
    padding: theme.spacing(8), // Padding for md screens and larger
  },
  [theme.breakpoints.up("md")]: {
    height: "63%", // Height for md screens and larger
    padding: theme.spacing(11), // Padding for md screens and larger
  },
}));

const HomeContent = () => {
  return (
    <Item
      variant="outlined"
      square
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        // marginTop: '50px'
      }}
    >
      <div className="mt-12 md:mt-14">
        <h1 className="font-iSerif mx-auto text-[35px] font-normal tracking-[-0.03em] text-[#0f172a] md:text-[52px] lg:text-[90px]">
          A new age of shoecare
        </h1>
      </div>
      <div className="lg:ml-20 lg:mt-32">
        <p className="font-inter max-w-3xl text-sm font-normal tracking-[-0.01em] text-[#455366] min-[425px]:text-base min-[768px]:text-xl">
          Welcome to the skincare revolution. The new age of beauty is here.
          Create a personalized routine with the best products. Helping you to
          achieve a youthful glow like never before.
        </p>
        <Button className="bg-[#6b5c4c] text-white min-[991px]:w-48 min-[991px]:mr-5">Shop collection</Button>
        <Button className="bg-white text-black min-[991px]:w-48">Our story</Button>
      </div>
    </Item>
  );
};

export default HomeContent;
