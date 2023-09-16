import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f2ede9",
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    height: "50%", // Height for md screens and larger
    padding: theme.spacing(5), // Padding for md screens and larger
  },
  [theme.breakpoints.up("sm")]: {
    height: "55%", // Height for md screens and larger
    padding: theme.spacing(8), // Padding for md screens and larger
  },
  [theme.breakpoints.up("md")]: {
    height: "57%", // Height for md screens and larger
    padding: theme.spacing(9), // Padding for md screens and larger
  },
}));

const CustomerCare = () => {
  const theme = useTheme();

  return (
    <Item
      variant="outlined"
      square
      sx={{
        display: "flex",
        flexDirection: "column-reverse", // Stack on top of each other by default
        [theme.breakpoints.up("md")]: {
          flexDirection: "row", // Side by side on md screens and larger
          alignItems: "center", // Center items horizontally on md screens and larger
        },
      }}
    >
      <div className="max-w-sm md:max-w-xl lg:max-w-xl">
        <h1 className="font-iSerif text-4xl font-normal leading-[0.95em] tracking-[-0.03em] text-[#0f172a] min-[560px]:text-[52px] lg:text-[82px] my-5">
          Real care for real people
        </h1>
        <p className="font-inter text-sm leading-6 tracking-[.01em] min-[768px]:text-[16px] lg:mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias
          ea odit illo voluptatibus commodi quam repudiandae totam, quas
          molestias iusto placeat ipsam optio corporis reiciendis! Quos ex eos
          nulla.
        </p>
      </div>
      <div>
        <img
          className="h-[100%] w-[100%] rounded-xl lg:w-[80%] lg:ml-20"
          src="https://source.unsplash.com/random?wallpapers"
          alt="unsplash"
        />
      </div>
    </Item>
  );
};

export default CustomerCare;
