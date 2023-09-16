import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#6b5c4c",
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    height: "50%", // Height for md screens and larger
    padding: theme.spacing(5), // Padding for xs screens 
  },
  [theme.breakpoints.up("sm")]: {
    height: "55%", // Height for md screens and larger
    padding: theme.spacing(8), // Padding for md screens 
  },
  [theme.breakpoints.up("md")]: {
    height: "57%", // Height for md screens and larger
    padding: theme.spacing(9), // Padding for md screens and larger
  },
}));
const ThanksSection = () => {
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
      <div>
        <img
          className="h-[80%] w-[100%] rounded-xl lg:h-[100%] lg:w-[80%]"
          src="https://source.unsplash.com/random?wallpapers"
          alt="unsplash"
        />
      </div>
      <div className="max-w-sm text-[#f2ede9] md:max-w-xl lg:max-w-lg">
        <h1 className="my-5 font-iSerif text-4xl font-normal leading-[0.95em] tracking-[-0.03em] min-[560px]:text-[52px] lg:text-[82px] lg:my-5">
          Your feet will thank you
        </h1>
        <p className=" font-inter text-[12px] leading-6 tracking-[.01em] min-[768px]:text-[16px] lg:mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias
          ea odit illo voluptatibus commodi quam repudiandae totam, quas
          molestias iusto placeat ipsam optio corporis reiciendis! Quos ex eos
          nulla.
        </p>
      </div>
    </Item>
  );
};

export default ThanksSection;
